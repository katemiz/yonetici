<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Building;

use Inertia\Inertia;
use Illuminate\Support\Facades\Config;


class BuildingController extends Controller
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


        $getdata = Building::query()
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
                ->through(fn($item) =>Building::processItem($item))
                ->withQueryString();

        return $getdata;
    }



    public function list(Request $request)
    {             
        return Inertia::render('Building/List',[
            "id" => false,
            "tabledata" => $this->getdata($request),
            "filters" => $request->only(["search"]),
            "notification" => false
        ]);
    }



    public function form(Request $request)
    {
        if (is_numeric($request->id) && is_numeric($request->id) > 0 ) {

            $item = Building::find($request->id);

        } else {
            $item = false;
        }

        return Inertia::render('Building/Form',[
            "item" => $item
        ]);
    }



    public function create(Request $request)
    {
        // validate
        $attributes = $request->validate([
            'title'=>'required'
        ]);

        // Add new record
        Building::create([
            'name' => ucfirst($attributes['title']),
            'adress' => $request['adress']['html'],
        ]);

        $item = Building::getLatestItem();
        $msg = 'Yeni bina/apartman başarıyla eklendi.';

        return Inertia::render('Building/Show',[
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
            'title'=>'required'
        ]);

        $params = [
            'name' => ucfirst($attributes['title']),
            'adress' => $request['adress']['html'],
        ];

        // Update record
        Building::find($attributes['id'])->update($params);
        $item = Building::getItemById($attributes['id']);
        $msg = 'Bina/apartman verileri başarıyla güncellenmiştir.';

        return Inertia::render('Building/Show',[
            "item" => $item,
            "notification" =>  [
                "type" =>'success',
                "message" => $msg
            ]
        ]); 
    }



    public function show(Request $request)
    {
        $item = Building::getItemById($request->id);

        return Inertia::render('Building/Show',[
            "item" => $item,
            "notification" => false
        ]);
    }



    public function destroy(Request $request)
    {
        Building::find($request->id)->delete();
        $msg = 'Bina/apartman başarıyla silinmiştir.';

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
