<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Sakin;
use App\Models\Building;


use Inertia\Inertia;
use Illuminate\Support\Facades\Config;


class SakinController extends Controller
{
    public function getdata($request) {

        $sortcolumn = 'name';
        $sortorder = 'asc';

        if ($request->input('sortcolumn')) {
            $sortcolumn = $request->input('sortcolumn');
        }

        if ($request->input('sortorder')) {
            $sortorder = $request->input('sortorder');
        }

        $params = false;

        if ( $request->input('search') ) {
            $params["search"] = $request->input('search');
        }

        if ($request->input('userid')) {
            $params["created_by"] = $request->input('userid');
        }


        $getdata = Sakin::query()
                ->orderBy($sortcolumn,$sortorder)
                ->when($params,function($query,$params) {

                    if (isset($params['search']) && !empty($params['search'])) {
                        $query->where('name','like','%'.$params['search'].'%');
                    }
        
                    if (isset($params['userid']) && !empty($params['userid'])) {
                        $query->where('created_by','=',$params['userid']);
                    }
                })
                ->paginate(Config::get('constants.table.no_of_results'))
                ->through(fn($item) =>Sakin::processItem($item))
                ->withQueryString();

        return $getdata;
    }



    public function list(Request $request)
    {             
        return Inertia::render('Sakin/List',[
            "id" => false,
            "tabledata" => $this->getdata($request),
            "binalar" => [],
            "filters" => $request->only(["search"]),
            "notification" => false
        ]);
    }



    public function form(Request $request)
    {
        if (is_numeric($request->id) && is_numeric($request->id) > 0 ) {

            $item = Sakin::find($request->id);

        } else {
            $item = false;
        }

        return Inertia::render('Sakin/Form',[
            "item" => $item,
            "binalar" => Building::all(),

        ]);
    }



    public function create(Request $request)
    {
        // validate
        $attributes = $request->validate([
            'name'=>'required',
            'lastname'=>'required',
            'bina'=>'required',
            'door_no'=>'required'
        ]);


        // Add new record
        Sakin::create([
            'name' => ucfirst($attributes['name']),
            'lastname' => ucfirst($attributes['lastname']),
            'bina' => $attributes['bina'],
            'door_no' => $attributes['door_no'],
            'phone' => $request['phone'],
            'is_evsahibi' => $request['is_evsahibi'],
            'giris_tarihi' => $request['giris_tarihi'],
            'remarks' => $request['remarks']['html'],
        ]);

        $item = Sakin::getLatestItem();
        $msg = 'Yeni sakin başarıyla eklendi.';

        return Inertia::render('Sakin/Show',[
            "item" => $item,
            "notification" =>  [
                "type" =>'success',
                "message" => $msg
            ]
        ]); 
    }


    public function update(Request $request)
    {
        // validate
        $attributes = $request->validate([
            'id'=>'required',
            'name'=>'required',
            'lastname'=>'required',
            'bina'=>'required',
            'door_no'=>'required'
        ]);

        $params = [
            'name' => ucfirst($attributes['name']),
            'lastname' => ucfirst($attributes['lastname']),
            'bina' => $attributes['bina'],
            'door_no' => $attributes['door_no'],
            'phone' => $request['phone'],
            'is_evsahibi' => $request['is_evsahibi'],
            'giris_tarihi' => $request['giris_tarihi'],
            'remarks' => $request['remarks']['html'],
        ];

        // Update record
        Sakin::find($attributes['id'])->update($params);
        $item = Sakin::getItemById($attributes['id']);
        $msg = 'Bina sakini verileri başarıyla güncellenmiştir.';

        return Inertia::render('Sakin/Show',[
            "item" => $item,
            "notification" =>  [
                "type" =>'success',
                "message" => $msg
            ]
        ]); 
    }



    public function show(Request $request)
    {
        $item = Sakin::getItemById($request->id);

        return Inertia::render('Sakin/Show',[
            "item" => $item,
            "notification" => false
        ]);
    }



    public function destroy(Request $request)
    {
        Building::find($request->id)->delete();
        $msg = 'Bina/aprtman başarıyla silinmiştir.';

        return Inertia::render('Building/List',[
            "tabledata" => $this->getdata($request),
            "filters" => $request->only(["search"]),
            "notification" =>  [
                "type" =>'success',
                "message" => $msg
            ]
        ]);
    }
}