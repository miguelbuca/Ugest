<?php

namespace App\Http\Controllers;
use App\Models\Tipoartigo;
use Illuminate\Http\Request;

class TipoArtigoController extends Controller
{
    public function index()
    {
        return Tipoartigo::all();
    }

    public function store(Request $req)
    {
        try {
            $tipoartigo = new Tipoartigo;

            $tipoartigo->tip_designacao = $req->tip_designacao;
            $tipoartigo->tip_estado_id = $req->	tip_estado_id;

            $result = $tipoartigo->save();

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
        return $id ? Tipoartigo::find($id) : Tipoartigo::all();
    }

    public function update(Request $req, $id)
    {
        try {
            $tipoartigo = Tipoartigo::find($id);

            if ($tipoartigo) {
                $tipoartigo->tip_designacao = $req->tip_designacao;
                $tipoartigo->tip_estado_id = $req->	tip_estado_id;

                $result = $tipoartigo->save();

                if ($result) {
                    return ["result" => $result];
                }

                return ["error" => "Some error ocurred"];
            }

            return ["error" => "tipoartigo does not exists"];
        } catch(Exception $e) {
            return ["error" => $e];
        }
    }

    public function destroy($id)
    {
        $tipoartigo = Tipoartigo::find($id);

        if ($tipoartigo) {
            $result = $tipoartigo->delete();

            if ($result) {
                return ["deleted" => true];
            }

            return ["error" => false];
        }
        
        return ["error" => "id does not exists"];
    }
}
