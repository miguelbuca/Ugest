<?php

use Illuminate\Http\Request;
use App\Http\Controllers\CategoriaController;

// use App\Http\Controllers\Client\API\CategoriaController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("add", [CategoriaController::class, 'add']);
// Route::get("add", function (Request $req) {
//     return $req;
// });

Route::post('/teste1', 
    array(
        'uses' =>  'CategoriaController@add', 
        'as'   =>  'apiUpdateClient',
    )
);
