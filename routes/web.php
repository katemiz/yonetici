<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\BuildingController;
use App\Http\Controllers\SakinController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard'); */


Route::get('/', function () {
    return Inertia::render('IndexGuest',["logout"=>false]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Index');
})->middleware(['auth','verified'])->name('dashboard');


require __DIR__.'/auth.php';









Route::middleware(['auth'])->group(function () {


    // BUILDING
    Route::get('tesisler',[BuildingController::class,'list']);
    Route::get('tesisler/{id}',[BuildingController::class,'show']);
    Route::get('tesisler-form/{id}',[BuildingController::class,'form']);
    Route::post('tesisler-upsert',[BuildingController::class,'create']);
    Route::put('tesisler-upsert',[BuildingController::class,'update']);
    Route::delete('tesisler',[BuildingController::class,'destroy']);

    // SAKINLER
    Route::get('sakinler',[SakinController::class,'list']);
    Route::get('sakinler/{id}',[SakinController::class,'show']);
    Route::get('sakinler-form/{id}',[SakinController::class,'form']);
    Route::post('sakinler-upsert',[SakinController::class,'create']);
    Route::put('sakinler-upsert',[SakinController::class,'update']);
    Route::delete('sakinler',[SakinController::class,'destroy']);







    // GELIR-GIDER-FATURA

/* 

    Route::get('record/{type}',[SimpleItemController::class,'list']);
    Route::get('record-form/{type}',[SimpleItemController::class,'form']);
    Route::get('record-form/{type}/{id}',[SimpleItemController::class,'form']);
    Route::get('record/{type}/{id}',[SimpleItemController::class,'show']);
    Route::post('record-upsert/{type}',[SimpleItemController::class,'create']);
    Route::put('record-upsert/{type}',[SimpleItemController::class,'update']);
    Route::delete('record/{type}',[SimpleItemController::class,'destroy']);



 */

});
