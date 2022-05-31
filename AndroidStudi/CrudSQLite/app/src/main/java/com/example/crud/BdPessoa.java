package com.example.crud;
import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

public class BdPessoa {
    private SQLiteDatabase db;
    private Bd banco;
    public BdPessoa(Context context){
        banco = new Bd(context);
    }
    public String insere(Pessoa pessoa){
        ContentValues valores;
        long resultado;
        db = banco.getWritableDatabase();
        valores = new ContentValues();
        valores.put("nome", pessoa.getNome());
        valores.put("cpf", pessoa.getCpf());
        valores.put("placaCarro", pessoa.getPlacaCarro());

        resultado = db.insert("carro", null, valores);
        db.close();
        if (resultado ==-1)
            return "Erro ao inserir registro";
        else
            return "Registro Inserido com sucesso";
    }
    public void altera(Pessoa pessoa){
        ContentValues valores;
        String where;
        db = banco.getWritableDatabase();
        where = "_id=" + pessoa.getId();
        valores = new ContentValues();
        valores.put("nome", pessoa.getNome());
        valores.put("cpf", pessoa.getCpf());
        valores.put("placaCarro", pessoa.getPlacaCarro());
        db.update("carro",valores,where,null);
        db.close();
    }
    public void exclui(int id){
        String where = "_id=" + id;
        db = banco.getReadableDatabase();
        db.delete("carro",where,null);
        db.close();
    }
    public Pessoa localiza(int id){
        Cursor cursor;
        Pessoa pessoa=new Pessoa();
        String[] campos = {"_id","nome","cpf","placaCarro"};
        String where = "_id=" + id;
        db = banco.getReadableDatabase();
        cursor = db.query("carro",campos,where, null, null, null, null, null);
        if(cursor!=null){
            cursor.moveToFirst();
            pessoa.setId(cursor.getInt(cursor.getColumnIndexOrThrow("_id")));
            pessoa.setNome(cursor.getString(cursor.getColumnIndexOrThrow("nome")));
            pessoa.setCpf(cursor.getString(cursor.getColumnIndexOrThrow("cpf")));
            pessoa.setPlacaCarro(cursor.getString(cursor.getColumnIndexOrThrow("placaCarro")));
        }
        db.close();
        return pessoa;
    }
    public Cursor pesquisa(){
        Cursor cursor;
        String[] campos = {"_id","nome"};
        db = banco.getReadableDatabase();
        cursor = db.query("carro", campos, null, null, null, null, null, null);
        if(cursor!=null){
            cursor.moveToFirst();
        }
        db.close(); return cursor;
    }

}
