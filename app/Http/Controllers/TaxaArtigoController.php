<?php

namespace App\Http\Controllers;
use App\Models\Taxaartigo;
use Illuminate\Http\Request;

class TaxaArtigoController extends Controller
{
    public function index()
    {
        return Taxaartigo::all();
    }

    public function store(Request $req)
    {
        try {
            $taxaartigo = new Taxaartigo;

            $taxaartigo->trt_art_id = $req->trt_art_id;
            $taxaartigo->trt_taxa_id = $req->trt_taxa_id;
            $taxaartigo->trt_estado = $req->trt_estado;

            $result = $taxaartigo->save();

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
        return $id ? Taxaartigo::find($id) : Taxaartigo::all();
    }

    public function update(Request $req, $id)
    {
        try {
            $taxaartigo = Taxaartigo::find($id);

            if ($taxaartigo) {
                $taxaartigo->trt_art_id = $req->trt_art_id;
                $taxaartigo->trt_taxa_id = $req->trt_taxa_id;
                $taxaartigo->trt_estado = $req->trt_estado;

                $result = $taxaartigo->save();

                if ($result) {
                    return ["result" => $result];
                }

                return ["error" => "Some error ocurred"];
            }

            return ["error" => "taxaartigo does not exists"];
        } catch(Exception $e) {
            return ["error" => $e];
        }
    }

    public function destroy($id)
    {
        $taxaartigo = Taxaartigo::find($id);

        if ($taxaartigo) {
            $result = $taxaartigo->delete();

            if ($result) {
                return ["deleted" => true];
            }

            return ["error" => false];
        }
        
        return ["error" => "id does not exists"];
    }
}
