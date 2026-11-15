<?php

namespace App\Http\Controllers;

use App\Models\Bina;
use App\Models\Kayit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class DosyaController extends Controller
{
    public function deleteMedia(int $mediaId)
    {
        $media = Media::query()
            ->whereIn('collection_name', ['alacak-attachments', 'income-attachments', 'expense-attachments', 'payable-attachments'])
            ->findOrFail($mediaId);
        $kayit = $media->model;
        $collection = $kayit instanceof Kayit ? match ($kayit->tur) {
            'alacak' => 'alacak-attachments',
            'gelir' => 'income-attachments',
            'gider' => 'expense-attachments',
            'verecek' => 'payable-attachments',
            default => null,
        } : null;

        abort_unless(
            $collection === $media->collection_name
                && Bina::query()->accessibleTo(Auth::user())->whereKey($kayit->bina_id)->exists(),
            404,
        );

        $media->delete();

        return back();
    }

    public function media(int $kayitId, int $mediaId)
    {
        $kayit = Kayit::query()->findOrFail($kayitId);

        $collection = match ($kayit->tur) {
            'alacak' => 'alacak-attachments',
            'gelir' => 'income-attachments',
            'gider' => 'expense-attachments',
            'verecek' => 'payable-attachments',
            default => null,
        };

        abort_unless($collection !== null, 404);

        abort_unless(Bina::query()->accessibleTo(Auth::user())->whereKey($kayit->bina_id)->exists(), 404);

        $media = $kayit->getMedia($collection)->firstWhere('id', $mediaId);
        abort_unless($media && is_file($media->getPath()), 404);

        return response()->download($media->getPath(), $media->file_name);
    }

    public function mediaAdd(Request $request, int $id)
    {
        $kayit = Kayit::query()->findOrFail($id);

        $collection = match ($kayit->tur) {
            'alacak' => 'alacak-attachments',
            'gelir' => 'income-attachments',
            'gider' => 'expense-attachments',
            'verecek' => 'payable-attachments',
            default => abort(404),
        };

        abort_unless(Bina::query()->accessibleTo(Auth::user())->whereKey($kayit->bina_id)->exists(), 404);

        $request->validate([
            'dosyalar' => ['sometimes', 'array'],
            'dosyalar.*' => ['file', 'max:10240'],
        ]);

        foreach ($request->file('dosyalar', []) as $file) {
            $kayit->addMedia($file)->toMediaCollection($collection);
        }

        return redirect()->route(
            match ($kayit->tur) {
                'gelir' => 'durum.incomes',
                'gider' => 'durum.expenses',
                'verecek' => 'durum.payables',
                'alacak' => 'durum.receivables',
                default => abort(404),
            }
        );
    }
}
