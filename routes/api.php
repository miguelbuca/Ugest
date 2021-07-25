<?php

use Illuminate\Http\Request;
use App\Http\Controllers\CategoriaController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/teste1', 
    array(
        'uses' =>  'CategoriaController@add', 
        // 'as'   =>  'apiUpdateClient',
    )
);
