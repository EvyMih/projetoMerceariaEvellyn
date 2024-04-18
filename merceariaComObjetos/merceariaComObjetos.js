let nomeDoProduto = document.getElementById("nomeDoProduto");
let valorProduto = document.getElementById("valorProduto");
let valorCarrinho = document.getElementById("valorCarrinho");

let carrinho = [];
let totalCarrinho = Number();

let controle = 0;
let totalItens = 0;

function frutaEscolhida(nomeDoProduto){
    nomeDoProduto = nomeDoProduto.value.toLowerCase();

    if(nomeDoProduto == "banana"){
        return `O valor do item ${nomeDoProduto} é R$ 5,99 KG`
    }else if(nomeDoProduto == 'laranja'){
        return `O valor do item "${nomeDoProduto}" é RS 4,98 kg`
    }else if(nomeDoProduto == 'maca'){
        return `O valor do item "${nomeDoProduto}" é RS 5,25 kg`
    }else if(nomeDoProduto == 'abacate'){
        return `O valor do item "${nomeDoProduto}" é RS 8,00 kg`
    }else if(nomeDoProduto == 'pera'){
        return `O valor do item "${nomeDoProduto}" é RS 7,75 kg`
    }else{
        voltar `Digite o nome de um dos produtos disponíveis na loja`
    }
}

valores = () => {
    valorProduto.innerHTML = (frutaEscolhida(nomeDoProduto));
}

function addCarrinho(){
    let produto;

    if(nomeDoProduto.value.toLowerCase() == "banana"){
        produto = {
            nome: nomeDoProduto.value.toLowerCase,
            valor: 5.99
        }
        totalItens ++

    }else if(nomeDoProduto.value.toLowerCase() == 'laranja'){
        produto = {
            nome: nomeDoProduto.value.toLowerCase(),
            preço: 4.98
        }
        totalItens++

    }else if(nomeDoProduto.value.toLowerCase() == 'maca'){
        produto = {
            nome: nomeDoProduto.value.toLowerCase(),
            preço: 5.25
        }
        totalItens++

    }else if(nomeDoProduto.value.toLowerCase() == 'abacate'){
        produto = {
            nome: nomeDoProduto.value.toLowerCase(),
            preço: 8.00
        }
        totalItens++

    }else if(nomeDoProduto.value.toLowerCase() == 'pera'){
        produto = {
            nome: nomeDoProduto.value.toLowerCase(),
            preço: 7.75
        }
        totalItens++

    }else{
        produto = 0
        controle++
    }

    carrinho.push(produto);
} 