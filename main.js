const form = document.getElementById('form-projeto');
const clientes = [];
const numeros = [];


let linhas = '';

form.addEventListener('submit' , function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});



function adicionaLinha() {
    const inputNomeCliente = document.getElementById('nome');
    const inputNumeroCliente = document.getElementById('numero');

    if(clientes.includes(inputNomeCliente.value)) {
        alert(`O cliente: ${inputNomeCliente.value} já foi cadastrado`);
    } else {

        clientes.push(inputNomeCliente.value);
        numeros.push(parseFloat(inputNumeroCliente.value));

        let linha = '<tr>';
        linha += `<td> ${inputNomeCliente.value} </td>`;
        linha += `<td> ${inputNumeroCliente.value} </td>`;
        linha += '<tr>';

        linhas += linha
    }
    inputNomeCliente.value = '';
    inputNumeroCliente.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
