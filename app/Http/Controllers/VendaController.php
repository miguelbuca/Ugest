<?php

namespace App\Http\Controllers;
use App\Models\Venda;
use Illuminate\Http\Request;

class VendaController extends Controller
{
    public function index()
    {
        return Venda::all();
    }

    public function store(Request $req)
    {
        try {
            $venda = new Venda;

            $venda->ven_art_id = $req->ven_art_id;
            $venda->ven_total = $req->ven_total;
            $venda->ven_quantidade = $req->ven_quantidade;
            $venda->ven_troco = $req->ven_troco;
            $venda->ven_valor_pago = $req->ven_valor_pago;
            $venda->ven_cliente_id = $req->ven_cliente_id;
            $venda->ven_estado = $req->ven_estado;
            $venda->ven_descricao = $req->ven_descricao;

            $result = $venda->save();

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
        return $id ? Venda::find($id) : Venda::all();
    }

    public function update(Request $req, $id)
    {
        try {
            $venda = Venda::find($id);

            if ($venda) {
                $venda->ven_art_id = $req->ven_art_id;
                $venda->ven_total = $req->ven_total;
                $venda->ven_quantidade = $req->ven_quantidade;
                $venda->ven_troco = $req->ven_troco;
                $venda->ven_valor_pago = $req->ven_valor_pago;
                $venda->ven_cliente_id = $req->ven_cliente_id;
                $venda->ven_estado = $req->ven_estado;
                $venda->ven_descricao = $req->ven_descricao;

                $result = $venda->save();

                if ($result) {
                    return ["result" => $result];
                }

                return ["error" => "Some error ocurred"];
            }

            return ["error" => "venda does not exists"];
        } catch(Exception $e) {
            return ["error" => $e];
        }
    }

    public function destroy($id)
    {
        $venda = Venda::find($id);

        if ($venda) {
            $result = $venda->delete();

            if ($result) {
                return ["deleted" => true];
            }

            return ["error" => false];
        }
        
        return ["error" => "id does not exists"];
    }
}
