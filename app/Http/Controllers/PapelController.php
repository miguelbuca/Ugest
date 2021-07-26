<?php

namespace App\Http\Controllers;
use App\Models\Papei;
use Illuminate\Http\Request;

class PapelController extends Controller
{
    public function index()
    {
        return Papei::all();
    }

    public function store(Request $req)
    {
        try {
            $papel = new Papei;

            $papel->pap_designacao = $req->pap_designacao;
            $papel->pap_estado_id = $req->pap_estado_id;

            $result = $papel->save();

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
        return $id ? Papei::find($id) : Papei::all();
    }

    public function update(Request $req, $id)
    {
        try {
            $papel = Papei::find($id);

            if ($papel) {
                $papel->pap_designacao = $req->pap_designacao;
                $papel->pap_estado_id = $req->pap_estado_id;

                $result = $papel->save();

                if ($result) {
                    return ["result" => $result];
                }

                return ["error" => "Some error ocurred"];
            }

            return ["error" => "papel does not exists"];
        } catch(Exception $e) {
            return ["error" => $e];
        }
    }

    public function destroy($id)
    {
        $papel = Papei::find($id);

        if ($papel) {
            $result = $papel->delete();

            if ($result) {
                return ["deleted" => true];
            }

            return ["error" => false];
        }
        
        return ["error" => "id does not exists"];
    }
}
