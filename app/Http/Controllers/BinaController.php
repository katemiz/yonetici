<?php

namespace App\Http\Controllers;

use App\Models\Ayarlar;
use App\Models\Bina;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BinaController extends Controller
{
    public function getBinalar()
    {
        return Bina::query()
            ->where('user_id', '=', Auth::id())
            ->get();
    }

    public function binalar()
    {
        return view('bina.bina-list', [
            'notification' => false,
            'binalar' => $this->getBinalar(),
        ]);
    }

    public function formBina(Request $request)
    {
        $bina = false;

        if ($request->id) {
            $sonuc = Bina::find($request->id);

            if ($sonuc->user_id === Auth::id()) {
                $bina = $sonuc;
            }
        }

        return view('bina.bina-form', [
            'bina' => $bina,
        ]);
    }

    public function addBina(Request $req)
    {
        $props['user_id'] = Auth::id();
        $props['name'] = $req->input('binaname');
        $props['address'] = $req->input('binaaddress');
        $props['city'] = $req->input('binacity');

        Bina::create($props);

        return view('bina.bina-list', [
            'binalar' => $this->getBinalar(),
        ]);
    }

    public function updateBina(Request $req)
    {
        $props['user_id'] = Auth::id();
        $props['name'] = $req->input('binaname');
        $props['address'] = $req->input('binaaddress');
        $props['city'] = $req->input('binacity');

        Bina::find($req->id)->update($props);

        return redirect()->route('binaview', ['id' => $req->id]);
    }

    public function ayarView(Request $req)
    {
        $bina = Bina::find($req->id);

        return view('bina.bina-ayar-view', [
            'notification' => false,
            'bina' => $bina,
        ]);
    }

    public function ayarForm(Request $req)
    {
        $bina = Bina::find($req->id);

        return view('bina.bina-ayar-form', [
            'notification' => false,
            'bina' => $bina,
        ]);
    }

    public function ayarAdd(Request $req)
    {
        $props['bina_id'] = $req->id;
        $props['para_birimi'] = $req->input('parabirimi');
        $props['yakit'] = $req->input('yakit');
        $props['su'] = $req->input('su');
        $props['sicak_su'] = $req->input('sicaksu');
        $props['elektrik'] = $req->input('elektrik');
        $props['asansor'] = $req->input('asansor');
        $props['hizmetli'] = $req->input('hizmetli');
        $props['vergi'] = $req->input('vergi');
        $props['bakim'] = $req->input('bakim');
        $props['onarim'] = $req->input('onarim');
        $props['aidat'] = $req->input('aidat');

        Ayarlar::create($props);

        $bina = Bina::find($req->id);

        return view('bina.bina-ayar-view', [
            'notification' => [
                'type' => 'is-success',
                'message' => 'Ayarlar eklenmiştir',
            ],
            'bina' => $bina,
        ]);
    }

    public function ayarUpdate(Request $req)
    {
        $props['para_birimi'] = $req->input('parabirimi');
        $props['yakit'] = $req->input('yakit');
        $props['su'] = $req->input('su');
        $props['sicak_su'] = $req->input('sicaksu');
        $props['elektrik'] = $req->input('elektrik');
        $props['asansor'] = $req->input('asansor');
        $props['hizmetli'] = $req->input('hizmetli');
        $props['vergi'] = $req->input('vergi');
        $props['bakim'] = $req->input('bakim');
        $props['onarim'] = $req->input('onarim');
        $props['aidat'] = $req->input('aidat');

        Ayarlar::find($req->ayarid)->update($props);

        return view('bina.bina-ayar-view', [
            'notification' => [
                'type' => 'is-success',
                'message' => 'Ayarlar güncellenmiştir',
            ],
            'bina' => Bina::find($req->id),
        ]);
    }
}
