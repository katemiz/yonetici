<?php

namespace App\Http\Controllers;

use App\Models\Bedel;
use App\Models\Bina;
use App\Models\Okuma;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OkumaController extends Controller
{
    public $bina = false;

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware(function ($request, $next) {
            $this->bina = Bina::find($request->id);

            if ($this->bina->user_id !== Auth::id()) {
                abort('403');
            }
            return $next($request);
        });
    }

    public function durum(Request $request)
    {
        $okumali_bedeller = Bedel::where([
            ['bina_id', '=', session('bina_id')],
            ['tur', '=', 'SAYAC'],
        ]);

        foreach ($this->bina->sakinler as $sakin) {
            foreach ($okumali_bedeller as $sayac) {
                $okumalar[$sakin->id] = Okuma::where([
                    ['bina_id', '=', session('bina_id')],
                    ['sakin_id', '=', $sakin->id],
                    ['bedel_id', '=', $sayac->id],
                ]);
            }
        }

        if ($request->bedelid) {
            $this->bedel = Okuma::find($request->bedelid);
        }

        return view('bina.bedel-form', [
            'bina' => $this->bina,
            'bedel' => $this->bedel,
            'tur_secenek' => $this->tur_secenek,
            'units' => $this->units,
        ]);
    }

    public function form(Request $request)
    {
        return view('bina.okuma-form', [
            'bina' => $this->bina,
        ]);
    }
}
