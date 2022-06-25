<?php

namespace App\Http\Controllers;

use App\Models\Bedel;
use App\Models\Bina;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BedelController extends Controller
{
    public $notification = false;
    public $bina = false;
    public $bedel = false;

    public $tur_secenek = [
        'SABIT' => 'Sabit Bedelli Ödeme',
        'SAYAC' => 'Okumaya Dayalı Ödeme (Sayaçlı)',
    ];

    public $units = [];

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware(function ($request, $next) {
            $this->bina = Bina::find($request->id);

            if ($this->bina->user_id !== Auth::id()) {
                abort('403');
            }

            $this->units = [
                $this->bina->pbirimi => $this->bina->pbirimi,
                'kalori' => $this->bina->pbirimi . '/Kalori',
                'kWh' => 'Kilowatt-saat',
                'm3' => $this->bina->pbirimi . '/m<sup>3</sup>',
            ];
            return $next($request);
        });
    }

    public function form(Request $request)
    {
        if ($request->bedelid) {
            $this->bedel = Bedel::find($request->bedelid);
        }

        return view('bina.bedel-form', [
            'bina' => $this->bina,
            'bedel' => $this->bedel,
            'tur_secenek' => $this->tur_secenek,
            'units' => $this->units,
        ]);
    }

    public function add(Request $req)
    {
        $props = $this->readFormValues($req);
        Bedel::create($props);

        return redirect()->route('bedeller', [
            'id' => $req->id,
        ]);
    }

    public function upd(Request $req)
    {
        $props = $this->readFormValues($req);
        Bedel::find($req->bedelid)->update($props);

        return redirect()->route('bedeller', [
            'id' => $req->id,
        ]);
    }

    public function readFormValues($req)
    {
        $props['user_id'] = Auth::id();
        $props['bina_id'] = $req->id;
        $props['title'] = $req->input('title');
        $props['tur'] = $req->input('tur');
        $props['unit'] = $req->input('birim');
        $props['bedel'] = $req->input('bedel');

        return $props;
    }
}
