<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;


class Bina extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $table = 'binalar';


    public function ayarlar()
    {
        return $this->hasOne(Ayarlar::class);
    }

    public function sakinler()
    {
        return $this->hasMany(Sakin::class);
    }


    public function kalemler()
    {
        return $this->hasMany(Kalem::class);
    }

    public function bedeller()
    {
        return $this->hasMany(Kalem::class);
    }


    protected function carbonCreatedAt(): Attribute
    {
        return new Attribute(
            get: fn ($value, $attributes) => Carbon::parse(
                $attributes['created_at']
            )->diffForHumans(),
        );
    }
}
