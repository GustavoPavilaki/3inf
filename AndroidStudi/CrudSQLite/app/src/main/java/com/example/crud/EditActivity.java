package com.example.crud;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class EditActivity extends AppCompatActivity {
    EditText tId, tMarcaDoCarro, tAno, tPlacaCarro;
    Button bSalva;
    Pessoa pessoa;
    BdPessoa bd;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        int id=0;
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_edit);
        pessoa = new Pessoa();
        bd = new BdPessoa(getBaseContext());
        tId = findViewById(R.id.tId);
        tMarcaDoCarro = findViewById(R.id.tMarcaDoCarro);
        tAno = findViewById(R.id.tAno);
        tPlacaCarro = findViewById(R.id.tPlacaCarro);
        bSalva = findViewById(R.id.bSalva);
        Bundle extra = getIntent().getExtras();
        tId.setText("0"); if (extra != null) {
            id = extra.getInt("id");
        } else {
            id = 0;
        }
        if (id == 0) {
            setTitle("Novo Cadastro");
            bSalva.setText("Insere");
        } else {
            setTitle("Alteração");
            bSalva.setText("Altera");
            pessoa = bd.localiza(id);
            pessoaToTela();
        }
        bSalva.setOnClickListener(new View.OnClickListener() { @Override
        public void onClick(View view) {
            telaToPessoa();
            if (pessoa.getId() == 0)
                bd.insere(pessoa);
            else
                bd.altera(pessoa);
            finish();
        }
        });

    }
    private void pessoaToTela(){
        tId.setText(Integer.toString(pessoa.getId()));
        tMarcaDoCarro.setText(pessoa.getNome());
        tAno.setText(pessoa.getCpf());
        tPlacaCarro.setText(pessoa.getPlacaCarro());
    }
    private void telaToPessoa() {
        pessoa.setId(Integer.parseInt(tId.getText().toString()));
        pessoa.setNome(tMarcaDoCarro.getText().toString());
        pessoa.setCpf(tAno.getText().toString());
        pessoa.setPlacaCarro(tPlacaCarro.getText().toString());
    }

}