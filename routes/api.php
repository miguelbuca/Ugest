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
use App\Http\Controllers\HistoricoStockController;
use App\Http\Controllers\NivelAcessoController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\TaxaController;
use App\Http\Controllers\VendaController;
use App\Http\Controllers\TaxaVendaController;
use App\Http\Controllers\TaxaCompraController;
use App\Http\Controllers\TaxaArtigoController;
use App\Http\Controllers\PapelController;
use App\Http\Controllers\PapelPessoaController;
use App\Http\Controllers\PermicoesNivelTablesController;

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

//Criando Rotas de HistoricoStock
Route::get('/historicostock', array('uses' => 'HistoricoStockController@index'));
Route::post('/historicostock', array('uses' => 'HistoricoStockController@store'));
Route::get('/historicostock/{id}', array('uses' => 'HistoricoStockController@show'));
Route::put('/historicostock/{id}', array('uses' => 'HistoricoStockController@update'));
Route::delete('/historicostock/{id}', array('uses' => 'HistoricoStockController@destroy'));

//Criando Rotas de NivelAcesso
Route::get('/nivelacesso', array('uses' => 'NivelAcessoController@index'));
Route::post('/nivelacesso', array('uses' => 'NivelAcessoController@store'));
Route::get('/nivelacesso/{id}', array('uses' => 'NivelAcessoController@show'));
Route::put('/nivelacesso/{id}', array('uses' => 'NivelAcessoController@update'));
Route::delete('/nivelacesso/{id}', array('uses' => 'NivelAcessoController@destroy'));

//Criando Rotas de Usuarios
Route::get('/usuario', array('uses' => 'UsuarioController@index'));
Route::post('/usuario', array('uses' => 'UsuarioController@store'));
Route::get('/usuario/{id}', array('uses' => 'UsuarioController@show'));
Route::put('/usuario/{id}', array('uses' => 'UsuarioController@update'));
Route::delete('/usuario/{id}', array('uses' => 'UsuarioController@destroy'));

//Criando Rotas de Taxa
Route::get('/taxa', array('uses' => 'TaxaController@index'));
Route::post('/taxa', array('uses' => 'TaxaController@store'));
Route::get('/taxa/{id}', array('uses' => 'TaxaController@show'));
Route::put('/taxa/{id}', array('uses' => 'TaxaController@update'));
Route::delete('/taxa/{id}', array('uses' => 'TaxaController@destroy'));

//Criando Rotas de Venda
Route::get('/venda', array('uses' => 'VendaController@index'));
Route::post('/venda', array('uses' => 'VendaController@store'));
Route::get('/venda/{id}', array('uses' => 'VendaController@show'));
Route::put('/venda/{id}', array('uses' => 'VendaController@update'));
Route::delete('/venda/{id}', array('uses' => 'VendaController@destroy'));

//Criando Rotas de Taxa Venda
Route::get('/taxavenda', array('uses' => 'TaxaVendaController@index'));
Route::post('/taxavenda', array('uses' => 'TaxaVendaController@store'));
Route::get('/taxavenda/{id}', array('uses' => 'TaxaVendaController@show'));
Route::put('/taxavenda/{id}', array('uses' => 'TaxaVendaController@update'));
Route::delete('/taxavenda/{id}', array('uses' => 'TaxaVendaController@destroy'));

//Criando Rotas de Taxa Compra
Route::get('/taxacompra', array('uses' => 'TaxaCompraController@index'));
Route::post('/taxacompra', array('uses' => 'TaxaCompraController@store'));
Route::get('/taxacompra/{id}', array('uses' => 'TaxaCompraController@show'));
Route::put('/taxacompra/{id}', array('uses' => 'TaxaCompraController@update'));
Route::delete('/taxacompra/{id}', array('uses' => 'TaxaCompraController@destroy'));

//Criando Rotas de Taxa Artigo
Route::get('/taxartigo', array('uses' => 'TaxaArtigoController@index'));
Route::post('/taxartigo', array('uses' => 'TaxaArtigoController@store'));
Route::get('/taxartigo/{id}', array('uses' => 'TaxaArtigoController@show'));
Route::put('/taxartigo/{id}', array('uses' => 'TaxaArtigoController@update'));
Route::delete('/taxartigo/{id}', array('uses' => 'TaxaArtigoController@destroy'));

//Criando Rotas de Papel
Route::get('/papel', array('uses' => 'PapelController@index'));
Route::post('/papel', array('uses' => 'PapelController@store'));
Route::get('/papel/{id}', array('uses' => 'PapelController@show'));
Route::put('/papel/{id}', array('uses' => 'PapelController@update'));
Route::delete('/papel/{id}', array('uses' => 'PapelController@destroy'));

//Criando Rotas de PapelPessoa
Route::get('/papelpessoa', array('uses' => 'PapelPessoaController@index'));
Route::post('/papelpessoa', array('uses' => 'PapelPessoaController@store'));
Route::get('/papelpessoa/{id}', array('uses' => 'PapelPessoaController@show'));
Route::put('/papelpessoa/{id}', array('uses' => 'PapelPessoaController@update'));
Route::delete('/papelpessoa/{id}', array('uses' => 'PapelPessoaController@destroy'));

//Criando Rotas de Permicoes Nivel Tables
Route::get('/permicoesniveltables', array('uses' => 'PermicoesNivelTablesController@index'));
Route::post('/permicoesniveltables', array('uses' => 'PermicoesNivelTablesController@store'));
Route::get('/permicoesniveltables/{id}', array('uses' => 'PermicoesNivelTablesController@show'));
Route::put('/permicoesniveltables/{id}', array('uses' => 'PermicoesNivelTablesController@update'));
Route::delete('/permicoesniveltables/{id}', array('uses' => 'PermicoesNivelTablesController@destroy'));
