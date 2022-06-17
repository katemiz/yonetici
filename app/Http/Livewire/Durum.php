<?php

namespace App\Http\Livewire;

use App\Models\Alacak;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Livewire\Component;

class Durum extends Component
{
    public $alacakverecek;

    public function render(Request $request)
    {
        // Alacaklar
        // Verecekler

        $this->alacakverecek = $request->type;

        $q = Alacak::query()->orderBy(
            $this->sortTimeField,
            $this->sortTimeDirection
        );

        $q->where('user_id', '=', Auth::id());

        if (strlen($this->search) > 0) {
            $q->where('name', 'like', '%' . $this->search . '%');
        }

        return view('durum.durum', [
            'notification' => false,
            'type' => $this->alacakverecek,
            'binalar' => $q->paginate(
                Config::get('constants.table.no_of_results')
            ),
        ]);

        return view('durum.durum');
    }
}
