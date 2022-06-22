<?php

namespace App\Http\Livewire;

use App\Models\Bina;
use App\Models\Kalem;
use App\Models\Sakin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
// use Livewire\Component;

class Kayitlar extends Component
{
    public $type = 'alacak';
    public $kayit = false;
    public $bina = false;

    public function render(Request $request)
    {
        if ($request->id) {
        }

        $this->bina = Bina::find(session('bina_id'));

        return view('kayit.kayit-form');
    }

    public function changeType($type)
    {
        $this->type = $type;
    }
}
