//Carrinho
function AddCarrinho(produto, qtd, valor, posicao)
{
    //Verifica se foi inserido a quantidade
    if(qtd < 1){
        alert("Informe a quantidade")
    }else{

        localStorage.setItem("produto" + posicao, produto);
        localStorage.setItem("qtd" + posicao, qtd);
        valor = valor * qtd;
        localStorage.setItem("valor" + posicao, valor);
        alert("Produto adicionado ao carrinho!");
}}