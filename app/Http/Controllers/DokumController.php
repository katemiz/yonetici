<?php

namespace App\Http\Controllers;

use App\Models\Bina;
use App\Models\Kayit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DokumController extends Controller
{
    public $bina;
    public $sakinler;

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware(function ($request, $next) {
            $this->bina = Bina::find(session('bina_id'));

            if ($this->bina->user_id !== Auth::id()) {
                abort('403');
            }

            foreach ($this->bina->sakinler as $sakin) {
                $this->sakinler[$sakin->id] =
                    $sakin->name . ' ' . $sakin->lastname;
            }

            return $next($request);
        });
    }

    public function dokum(Request $request)
    {
        return view('dokum', [
            'notification' => false,
            'bina' => $this->bina,
            'sakinler' => $this->sakinler,
            'ozet' => $this->ozet(),
            'gelirler' => $this->gelirler(),
            'giderler' => $this->giderler(),
        ]);
    }

    public function ozet()
    {
        // Alacaklar
        $alacak_top_tutar = Kayit::where([
            ['bina_id', '=', $this->bina->id],
            ['tur', '=', 'alacak'],
        ])->sum('tutar');

        // Verecekler - Faturalar
        $verecek_top_tutar = Kayit::where([
            ['bina_id', '=', $this->bina->id],
            ['tur', '=', 'verecek'],
        ])->sum('tutar');

        // Gelirler
        $gelirler_top_tutar = Kayit::where([
            ['bina_id', '=', $this->bina->id],
            ['tur', '=', 'gelir'],
        ])->sum('tutar');

        // Giderler
        $giderler_top_tutar = Kayit::where([
            ['bina_id', '=', $this->bina->id],
            ['tur', '=', 'gider'],
        ])->sum('tutar');

        $nakit = $gelirler_top_tutar - $giderler_top_tutar;

        $ozet['toplam_alacak'] = number_format($alacak_top_tutar, 2, ',', ' ');
        $ozet['toplam_borc'] = number_format($verecek_top_tutar, 2, ',', ' ');
        $ozet['toplam_gelir'] = number_format($gelirler_top_tutar, 2, ',', ' ');
        $ozet['toplam_gider'] = number_format($giderler_top_tutar, 2, ',', ' ');
        $ozet['nakit'] = number_format($nakit, 2, ',', ' ');

        return (object) $ozet;
    }

    public function gelirler()
    {
        return Kayit::where('bina_id', $this->bina->id)
            ->where('tur', '=', 'gelir')
            ->get();
    }

    public function giderler()
    {
        return Kayit::where('bina_id', $this->bina->id)
            ->where('tur', '=', 'gider')
            ->get();
    }
}
