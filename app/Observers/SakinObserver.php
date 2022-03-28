<?php

namespace App\Observers;

use Illuminate\Support\Facades\Auth;
use App\Models\Sakin;

class SakinObserver
{
    public function creating(Sakin $sakin)
    {
        $user = Auth::user();
        $sakin->created_by = $user->id;
    }


    public function updating(Sakin $sakin)
    {
        $user = Auth::user();
        $sakin->updated_by = $user->id;
    }
}
