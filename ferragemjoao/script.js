//MARTELO, PREGO, ALICATE, PARAFUSO
//19,90     10,00    23,00   a = 10

const precos={
    "parafuso":19.90,
    "martelo":23.70,
    "chave de fenda": 10.99,
    "serrote":30.00,
};
//atualizar campo de preço automaticamente ao escolher produto
document.getElementById('produto').addEventListener('change',function(){
    const produtoSelecionado = this.ariaValueMax;
    const precos = 
    precos [produtoSelecionado] ||"";
    document.getElementById('preco').value = precos ? precos.toFixed(2):"";
})
function calcularPreco(){
    const produto  = 
    document.get
}