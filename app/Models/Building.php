<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;


class Building extends Model
{
    use HasFactory;


    protected $guarded = ['id'];

    public static function getItemById($id) {
        return Building::processItem(Building::find($id));
    }


    public static function getLatestItem() {
        return Building::processItem(Building::latest()->first());
    }

    public function sakins()
    {
        return $this->belongsToMany(Sakin::class)->withTimestamps();
    }



    public static function processItem($item) {

        $item["created_by"] = User::select('name','lastname','email')->where('id', $item["created_by"])->first();
        $item["created_diff"] = Carbon::parse($item["created_at"])->diffForHumans();

        $item["updated_by"] = User::select('name','lastname','email')->where('id', $item["updated_by"])->first();
        $item["updated_diff"] = Carbon::parse($item["updated_at"])->diffForHumans();

        return $item;
    }




}
