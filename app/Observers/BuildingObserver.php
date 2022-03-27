<?php

namespace App\Observers;

use Illuminate\Support\Facades\Auth;
use App\Models\Building;

class BuildingObserver
{
    public function creating(Building $building)
    {
        $user = Auth::user();
        $building->created_by = $user->id;
    }


    public function updating(Building $building)
    {
        $user = Auth::user();
        $building->updated_by = $user->id;
    }
}
