<?php

namespace App\Http\Controllers;

use App\Models\Kayit;
use App\Models\Bedel;
use App\Models\Bina;
use App\Models\Dosya;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class KayitController extends Controller
{
    public $bina;
    public $kayit = false;
    public $tutarlar = false;
    public $okumali_bedeller = false;

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware(function ($request, $next) {
            $this->bina = Bina::find(session('bina_id'));

            if ($this->bina->user_id !== Auth::id()) {
                abort('403');
            }

            if ($request->tur == 'aidat') {
                $this->tutarlar = $this->calculateAidatlar();
                $this->okumali_bedeller = $this->okumaliBedeller();
            }

            return $next($request);
        });
    }

    public function kayitForm(Request $request)
    {
        return view('kayit.kayit-form', [
            'bina' => $this->bina,
            'kayit' => $this->kayit,
            'tur' => $request->tur,
            'tutarlar' => $this->tutarlar,
            'okumali_bedeller' => $this->okumali_bedeller,
        ]);
    }

    public function kayitAdd(Request $req)
    {
        $props['user_id'] = Auth::id();
        $props['bina_id'] = session('bina_id');
        $props['sakin_id'] = 0;
        $props['remarks'] = $req->input('editor_data');

        if ($req->tur == 'aidat') {
            $bina = Bina::find(session('bina_id'));

            $donem_exp = explode('-', $req->input('donem'));

            $aylar['01'] = 'Ocak';
            $aylar['02'] = 'Şubat';
            $aylar['03'] = 'Mart';
            $aylar['04'] = 'Nisan';
            $aylar['05'] = 'Mayıs';
            $aylar['06'] = 'Haziran';
            $aylar['07'] = 'Temmuz';
            $aylar['08'] = 'Ağustos';
            $aylar['09'] = 'Eylül';
            $aylar['10'] = 'Ekim';
            $aylar['11'] = 'Kasım';
            $aylar['12'] = 'Aralık';

            $aciklama =
                $aylar[$donem_exp['1']] .
                ' ' .
                $donem_exp['0'] .
                ' dönemi aidatı';

            $props['tur'] = 'alacak';
            $props['aciklama'] = $aciklama;
            $props['donem'] = $req->input('donem');
            $props['son_odeme'] = '';

            foreach ($bina->sakinler as $sakin) {
                $props['sakin_id'] = $sakin->id;
                $props['tutar'] =
                    ($sakin->payratio / 100) * $this->sabitBedeller();

                $kayit = Kayit::create($props);
                $this->addFiles($req, $kayit->id);
            }

            return redirect()->route('durum', ['tur' => 'alacaklar']);
        }

        if ($req->tur == 'alacak') {
            $props['sakin_id'] = $req->input('borclu');
            $props['tur'] = 'alacak';
            $props['aciklama'] = $req->input('aciklama');
            $props['donem'] = '';
            $props['tutar'] = $req->input('tutar');
            $props['son_odeme'] = $req->input('sonodeme');

            $kayit = Kayit::create($props);
            $this->addFiles($req, $kayit->id);

            return redirect()->route('durum', ['tur' => 'alacaklar']);
        }

        if ($req->tur == 'fatura') {
            $props['tur'] = 'verecek';
            $props['aciklama'] = $req->input('aciklama');
            $props['donem'] = '';
            $props['tutar'] = $req->input('tutar');
            $props['son_odeme'] = $req->input('sonodeme');

            $kayit = Kayit::create($props);
            $this->addFiles($req, $kayit->id);

            return redirect()->route('durum', ['tur' => 'verecekler']);
        }

        if ($req->tur == 'gider') {
            $props['tur'] = 'gider';
            $props['aciklama'] = $req->input('aciklama');
            $props['donem'] = '';
            $props['tutar'] = $req->input('tutar');
            $props['son_odeme'] = date('Y-m-d', time());

            $kayit = Kayit::create($props);
            $this->addFiles($req, $kayit->id);

            return redirect()->route('durum', ['tur' => 'giderler']);
        }
    }

    public function sabitBedeller()
    {
        $sabit_bedeller = Bedel::where([
            ['bina_id', '=', session('bina_id')],
            ['tur', '=', 'SABIT'],
        ])->sum('bedel');

        return $sabit_bedeller;
    }

    public function okumaliBedeller()
    {
        $okumali_bedeller = Bedel::where([
            ['bina_id', '=', session('bina_id')],
            ['tur', '=', 'SAYAC'],
        ]);

        return $okumali_bedeller;
    }

    public function calculateAidatlar()
    {
        $aylik = $this->sabitBedeller();

        foreach ($this->bina->sakinler as $sakin) {
            $tutarlar[$sakin->id] = round(($sakin->payratio * $aylik) / 100, 0);
        }

        return $tutarlar;
    }

    public function addFiles($req, $id)
    {
        if ($req->has('dosyalar')) {
            foreach ($req->file('dosyalar') as $dosya) {
                if (strlen($dosya->getMimeType()) > 32) {
                    $filename = '/usr' . Auth::id() . '/file/other';
                } else {
                    $filename =
                        '/usr' . Auth::id() . '/' . $dosya->getMimeType();
                }

                $saved_dir = Storage::disk('local')->put($filename, $dosya);

                $this->saveRecord($dosya, $id, $saved_dir);
            }
        }
    }

    public function saveRecord($dosya, $kayit_id, $saved_dir)
    {
        $dosya_data = [
            'kayit_id' => $kayit_id,
            'filename' => $dosya->getClientOriginalName(),
            'stored_as' => $saved_dir,
        ];

        Dosya::create($dosya_data);
    }
}
