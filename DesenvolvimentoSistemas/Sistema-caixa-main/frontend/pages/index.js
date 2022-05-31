import Moment from 'moment';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';

Moment.locale('pt-br');

function Index() {
    const [data, setData] = useState(null);
    const [filter, setFilter] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8000/movimento').then((res) => res.json()).then((data) => {
            setData(data)
            setLoading(false)
        });
    }, []);


    if (isLoading) return <p>Loading...</p>
    if (!data || data?.status !== 200) return <p>No data</p>


    let content = filter ? data.content.filter(c => {
        let data = new Date(c.timestamp);
        return (data.getTime() >= filter.dates[0] && data.getTime() < filter.dates[1])

    }) : data.content;


    let movimentado = 0;
    
    content.map(c => {
        if (c.tipo === 'ENTRADA') {
            movimentado += c.valor;
        } else if (c.tipo === 'SAIDA') {
            movimentado -= c.valor;
        };
    });

    let lista = content.map(c =>
        <tr>
            <td>
                {c.descricao}
            </td>
            <td>
                {
                    Moment(new Date(c.timestamp)).format('D/M/YYYY')
                }
            </td>
            <td>
                {c.valor}
            </td>
            <td>
                {c.tipo}
            </td>
        </tr>
    )

    return (
        <div>
            <header>
                <nav>
                    <a>Sistema De Caixa</a>
                </nav>
            </header>
            <main>
                <div class="button-container">
                    <div>
                        <input type="date" id="date01" />
                        <input type="date" id="date02" />


                        <button class="btn" onClick={() => {
                            if (!filter) {
                                setFilter({
                                    dates: [
                                        new Date(document.getElementById('date01').value).getTime() + (3600000 * 3),
                                        new Date(document.getElementById('date02').value).getTime() + (3600000 * 27)
                                    ]
                                });
                            } else {
                                setFilter(null);
                            }
                        }}>Aplicar Filtro</button>
                    </div>
                    <form autoComplete="off" className="form modal-form" onSubmit={async (e) => {
                        e.preventDefault();
                        fetch('http://localhost:8000/movimento/add', {
                            body: JSON.stringify({
                                valor: parseFloat(e.target.valor.value),
                                date: new Date(e.target.date.value).getTime(),
                                descricao: e.target.descricao.value,
                                tipo: e.target.tipo.value
                            }),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            method: 'POST',
                        }).then(res => res.json()).then(data => {
                            setData(data);
                        }).catch(() => {
                        });
                    }}>
                        <input type="text" name="descricao" placeholder="Descrição" required />
                        <input type="date" name="date" required />
                        <input type="number" step="0.01" name="valor" placeholder="Valor" required />
                        <select name="tipo" required>
                            <option value="ENTRADA">Entrada</option>
                            <option value="SAIDA">Saida</option>
                        </select>
                        <button type="submit" className="btn">Cadastrar movimento</button>
                    </form>
                </div>
                <div class="table-container">
                    <h5>Saldo Total: {movimentado}</h5>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Descrição</th>
                                <th>Data</th>
                                <th>Valor</th>
                                <th>Tipo</th>
                            </tr>
                            {lista}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default Index;