<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use Illuminate\Support\Facades\Config;


use App\Models\Setting;
use App\Models\Building;









class SettingController extends Controller
{
    public function view(Request $request)
    {             
        return Inertia::render('Settings/View',[
            "settings" => Setting::where('bina', $request->konutid)->orderBy('updated_at','desc')->first(),
            "bina" => Building::getItemById($request->konutid),
            "notification" => false
        ]);
    }


    public function create(Request $request)
    {       
        if ($request->konutid) {

            // validate
            $attributes = $request->validate([
                'aidat'=>'required',
                'hotwater'=>'required'
            ]);

            // Add new record
            Setting::create([
                'bina' => $request->konutid,
                'aidat' => $attributes["aidat"],
                'hotwater' => $attributes["hotwater"],
                'water' => 0
            ]);

            $item = Setting::getLatestItem();

            return Inertia::render('Settings/View',[
                "settings" => Setting::where('bina', $request->konutid)->orderBy('updated_at','desc')->first(),
                "bina" => Building::getItemById($request->konutid),
                "notification" =>  [
                    "type" =>'success',
                    "message" => 'Ayarlar yeni kayıt olarak eklendi.'
                ]
            ]); 
        } else {
            dd($request);
        }
    }




    public function update(Request $request)
    {       
        if ($request->konutid) {

            // validate
            $attributes = $request->validate([
                'id'=>'required',
                'aidat'=>'required',
                'hotwater'=>'required'
            ]);

            // Add new record
            $params = [
                'bina' => $request->konutid,
                'aidat' => $attributes["aidat"],
                'hotwater' => $attributes["hotwater"],
            ];

            // Update record
            Setting::find($attributes['id'])->update($params);
            $item = Setting::getItemById($attributes['id']);

            return Inertia::render('Settings/View',[
                "settings" => Setting::where('bina', $request->konutid)->orderBy('updated_at','desc')->first(),
                "bina" => Building::getItemById($request->konutid),
                "notification" =>  [
                    "type" =>'success',
                    "message" => 'Ayarlar başarıyla değiştirildi.'
                ]
            ]);

        } else {
            dd($request);
        }
    }















    public function form(Request $request)
    {             
        return Inertia::render('Settings/Form',[
            "settings" => Setting::where('bina', $request->konutid)->orderBy('updated_at','desc')->first(),
            "bina" => Building::getItemById($request["konutid"]),
        ]);
    }



}
