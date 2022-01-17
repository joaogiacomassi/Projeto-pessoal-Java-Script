function Cliente() {
    this.nome;
    this.saldo;

    AtualizaSaldo(this);
}

var cliente = new Cliente();
function Cadastrar() {

    var nomeCliente = document.getElementById("nome").value;
    var saldoCliente = document.getElementById("saldocliente").value;

    cliente.nome = nomeCliente;
    cliente.saldo =  parseFloat(saldoCliente); 

    AtualizaSaldo(cliente);
    ExibirMensagem();
}

function Sacar(){
    var valor = parseInt(document.getElementById("input-valor").value);
    cliente.saldo -= valor;

    AtualizaSaldo(cliente);
    ExibirMensagem(cliente);
}


function Depositar(){
    var valor = parseInt(document.getElementById("input-valor").value);
    cliente.saldo += valor;

    AtualizaSaldo(cliente);
    ExibirMensagem(cliente);
};

function ExibirMensagem(cliente){
    alert(`Saldo atual de ${cliente.nome} eh de R$ ${cliente.saldo}`);
}

function AtualizaSaldo(cliente){
    document.getElementById("saldo-atual").textContent= cliente.saldo;
    cliente.nome == undefined? "" : document.getElementById("titulo-saldo").innerText = "Saldo do Cliente " + cliente.nome + ":";
}

