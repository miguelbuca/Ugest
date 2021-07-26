<?php

use Illuminate\Http\Request;
use App\Http\Controllers\EstadoController;
use App\Http\Controllers\PessoaController;
use App\Http\Controllers\SubcategoriaController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\TipoArtigoController;
use App\Http\Controllers\ArtigoController;
use App\Http\Controllers\ContactoController;
use App\Http\Controllers\EnderecoController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Criando Rotas de Estado
Route::get('/estado', array('uses' => 'EstadoController@index'));
Route::post('/estado', array('uses' => 'EstadoController@store'));
Route::get('/estado/{id}', array('uses' => 'EstadoController@show'));
Route::put('/estado/{id}', array('uses' => 'EstadoController@update'));
Route::delete('/estado/{id}', array('uses' => 'EstadoController@destroy'));

//Criando Rotas de Pessoa
Route::get('/pessoa', array('uses' => 'PessoaController@index'));
Route::post('/pessoa', array('uses' => 'PessoaController@store'));
Route::get('/pessoa/{id}', array('uses' => 'PessoaController@show'));
Route::put('/pessoa/{id}', array('uses' => 'PessoaController@update'));
Route::delete('/pessoa/{id}', array('uses' => 'PessoaController@destroy'));

//Criando Rotas de Subcategoria
Route::get('/subcategoria', array('uses' => 'SubcategoriaController@index'));
Route::post('/subcategoria', array('uses' => 'SubcategoriaController@store'));
Route::get('/subcategoria/{id}', array('uses' => 'SubcategoriaController@show'));
Route::put('/subcategoria/{id}', array('uses' => 'SubcategoriaController@update'));
Route::delete('/subcategoria/{id}', array('uses' => 'SubcategoriaController@destroy'));

//Criando Rotas de Categoria
Route::get('/categoria', array('uses' => 'CategoriaController@index'));
Route::post('/categoria', array('uses' => 'CategoriaController@store'));
Route::get('/categoria/{id}', array('uses' => 'CategoriaController@show'));
Route::put('/categoria/{id}', array('uses' => 'CategoriaController@update'));
Route::delete('/categoria/{id}', array('uses' => 'CategoriaController@destroy'));

//Criando Rotas de TipoArtigo
Route::get('/tipoartigo', array('uses' => 'TipoArtigoController@index'));
Route::post('/tipoartigo', array('uses' => 'TipoArtigoController@store'));
Route::get('/tipoartigo/{id}', array('uses' => 'TipoArtigoController@show'));
Route::put('/tipoartigo/{id}', array('uses' => 'TipoArtigoController@update'));
Route::delete('/tipoartigo/{id}', array('uses' => 'TipoArtigoController@destroy'));

//Criando Rotas de Artigo
Route::get('/artigo', array('uses' => 'ArtigoController@index'));
Route::post('/artigo', array('uses' => 'ArtigoController@store'));
Route::get('/artigo/{id}', array('uses' => 'ArtigoController@show'));
Route::put('/artigo/{id}', array('uses' => 'ArtigoController@update'));
Route::delete('/artigo/{id}', array('uses' => 'ArtigoController@destroy'));

//Criando Rotas de Contacto
Route::get('/contacto', array('uses' => 'ContactoController@index'));
Route::post('/contacto', array('uses' => 'ContactoController@store'));
Route::get('/contacto/{id}', array('uses' => 'ContactoController@show'));
Route::put('/contacto/{id}', array('uses' => 'ContactoController@update'));
Route::delete('/contacto/{id}', array('uses' => 'ContactoController@destroy'));

//Criando Rotas de Endereços
Route::get('/endereco', array('uses' => 'EnderecoController@index'));
Route::post('/endereco', array('uses' => 'EnderecoController@store'));
Route::get('/endereco/{id}', array('uses' => 'EnderecoController@show'));
Route::put('/endereco/{id}', array('uses' => 'EnderecoController@update'));
Route::delete('/endereco/{id}', array('uses' => 'EnderecoController@destroy'));
