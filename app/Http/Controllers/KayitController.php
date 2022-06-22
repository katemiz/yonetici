<?php

namespace App\Http\Controllers;

use App\Models\Kayit;
use App\Models\Ayarlar;
use App\Models\Bina;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class KayitController extends Controller
{
    public function kayitForm(Request $request)
    {
        $kayit = false;
        $tutarlar = false;

        $this->setSelectedBina();
        $bina = Bina::find(session('bina_id'));

        if ($bina->user_id !== Auth::id()) {
            abort('403');
        }

        if ($request->tur == 'aidat') {
            $tutarlar = $this->calculateAidatlar($bina);
        }

        // return redirect()->route('durum', [
        //     'tur' => $request->tur,
        // ]);

        return view('kayit.kayit-form', [
            'bina' => $bina,
            'kayit' => $kayit,
            'tur' => $request->tur,
            'tutarlar' => $tutarlar,
        ]);
    }

    public function kayitAdd(Request $req)
    {
        $props['user_id'] = Auth::id();
        $props['bina_id'] = session('bina_id');
        $props['sakin_id'] = '';
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
                    ($sakin->payratio / 100) * $this->calculateAidat();

                Kayit::create($props);
            }

            return redirect()->route('durum', ['tur' => 'alacaklar']);

            // return view('kayit.kayit-list', [
            //     'notification' => [
            //         'type' => 'is-success',
            //         'message' => 'Dönem aidat kaydı eklenmiştir',
            //     ],
            //     'bina' => $bina,
            //     'sakin' => $sakin,
            // ]);
        }

        if ($req->tur == 'fatura') {
            $props['tur'] = 'verecek';
            $props['aciklama'] = $req->input('aciklama');
            $props['donem'] = '';
            $props['tutar'] = $req->input('tutar');
            $props['son_odeme'] = $req->input('sonodeme');

            // dd($props);

            Kayit::create($props);

            return redirect()->route('durum', ['tur' => 'verecekler']);
        }

        // $sakin = Alacak::create($props);
        // $bina = Bina::find($req->id);

        // return view('kayit.kayit-view', [
        //     'notification' => [
        //         'type' => 'is-success',
        //         'message' => 'Kayıt eklenmiştir',
        //     ],
        //     'bina' => $bina,
        //     'sakin' => $sakin,
        // ]);
    }

    public function calculateAidat()
    {
        $ayarlar = Ayarlar::query()
            ->where('bina_id', '=', session('bina_id'))
            ->first()
            ->get()
            ->toArray();

        $ayarlar = $ayarlar['0'];

        $aylik =
            $ayarlar['yakit'] +
            $ayarlar['su'] +
            $ayarlar['sicak_su'] +
            $ayarlar['elektrik'] +
            $ayarlar['asansor'] +
            $ayarlar['hizmetli'] +
            $ayarlar['vergi'] +
            $ayarlar['bakim'] +
            $ayarlar['onarim'] +
            $ayarlar['aidat'];

        return $aylik;
    }

    public function calculateAidatlar($bina)
    {
        $aylik = $this->calculateAidat();

        foreach ($bina->sakinler as $sakin) {
            $tutarlar[$sakin->id] = ($sakin->payratio * $aylik) / 100;
        }

        return $tutarlar;
    }

    public function setSelectedBina()
    {
        session(['selected_bina' => 'Deneme Apt', 'bina_id' => 3]);
    }
}
