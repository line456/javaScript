const precos = {
    "parafuso": 19.90,
    "martelo": 23.70,
    "chave de fenda": 10.99,
    "serrote": 30.00,
    "prego": 10.00
};

const estoque = {
    "parafuso": 100,
    "martelo": 4,
    "chave de fenda": 6,
    "serrote": 1000,
    "prego": 50
};

function calcularPreco() {
    const qtd = parseInt(document.getElementById("quantidade").value);
    const escolha = document.getElementById("produto").value.trim();
    const resultado = document.getElementById("resultado");
    const mensagem = document.getElementById("mensagem");

    if (!precos[escolha]) {
        resultado.textContent = "Produto inválido.";
        return;
    }

    const valortotal = qtd * precos[escolha];

    if (estoque[escolha] >= qtd) {
        resultado.textContent = `Valor total: R$ ${valortotal.toFixed(2)}`;
        estoque[escolha] -= qtd;
        exibirMensagem(`Compra realizada com sucesso! Estoque restante: ${estoque[escolha]}`, 'sucesso');
    } else {
        exibirMensagem("Estoque indisponível para essa quantidade.", 'erro');
    }

    console.log(estoque);  // Para debug
}

function adicionarAoCarrinho() {
    const produto = document.getElementById("produto").value.trim();
    const quantidade = document.getElementById("quantidade").value;
    exibirMensagem(`${quantidade} x ${produto} adicionado(s) ao carrinho.`, 'sucesso');
}

function exibirMensagem(texto, tipo) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    mensagem.className = `mensagem ${tipo}`;
    mensagem.style.display = 'block';
}
