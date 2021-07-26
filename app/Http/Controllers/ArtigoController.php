<?php

namespace App\Http\Controllers;
use App\Models\Artigo;
use Illuminate\Http\Request;

class ArtigoController extends Controller
{
    public function index()
    {
        return Artigo::all();
    }

    public function store(Request $req)
    {
        try {
            $artigo = new Artigo;

            $artigo->art_designacao = $req->art_designacao;
            $artigo->art_tipoArtigo_id = $req->art_tipoArtigo_id;
            $artigo->art_stock_minimo = $req->art_stock_minimo;
            $artigo->art_stock_real = $req->art_stock_real;
            $artigo->art_estado_id = $req->art_estado_id;

            $result = $artigo->save();

            if ($result) {
                return ["result" => $result];
            }

            return ["error" => "Some error ocurred"];
        } catch(Exception $e) {
            return ["error" => $e];
        }
    }

    public function show($id)
    {
        return $id ? Artigo::find($id) : Artigo::all();
    }

    public function update(Request $req, $id)
    {
        try {
            $artigo = Artigo::find($id);

            if ($artigo) {
                $artigo->art_designacao = $req->art_designacao;
                $artigo->art_tipoArtigo_id = $req->art_tipoArtigo_id;
                $artigo->art_stock_minimo = $req->art_stock_minimo;
                $artigo->art_stock_real = $req->art_stock_real;
                $artigo->art_estado_id = $req->art_estado_id;

                $result = $artigo->save();

                if ($result) {
                    return ["result" => $result];
                }

                return ["error" => "Some error ocurred"];
            }

            return ["error" => "artigo does not exists"];
        } catch(Exception $e) {
            return ["error" => $e];
        }
    }

    public function destroy($id)
    {
        $artigo = Artigo::find($id);

        if ($artigo) {
            $result = $artigo->delete();

            if ($result) {
                return ["deleted" => true];
            }

            return ["error" => false];
        }
        
        return ["error" => "id does not exists"];
    }
}
