let nomeDoProduto = document.getElementById("nomeDoProduto");
let valorProduto = document.getElementById("valorProduto");
let valorCarrinho = document.getElementById("valorCarrinho");

let carrinho = [];
let totalCarrinho = Number();

let controle = 0;
let totalItens = 0;

validadorDeNome = () => {
    return nomeDoProduto.value.toLowerCase()
}

function frutaEscolhida(){

    if(validadorDeNome() == "banana"){
        return `O valor do item ${validadorDeNome()} é R$ 5,99 KG`
    }else if(validadorDeNome() == 'laranja'){
        return `O valor do item "${validadorDeNome()}" é RS 4,98 kg`
    }else if(validadorDeNome() == 'maca'){
        return `O valor do item "${validadorDeNome()}" é RS 5,25 kg`
    }else if(validadorDeNome() == 'abacate'){
        return `O valor do item "${validadorDeNome()}" é RS 8,00 kg`
    }else if(validadorDeNome() == 'pera'){
        return `O valor do item "${validadorDeNome()}" é RS 7,75 kg`
    }else{
        return `Digite o nome de um dos produtos disponíveis na loja`
    }
}

valores = () => {
    valorProduto.innerHTML = (frutaEscolhida());
}

function addCarrinho(){
    let produto;

    if(validadorDeNome() == "banana"){
        produto = {
        nome: nomeDoProduto,
        preco: 5.99
        }
        totalItens ++

    }else if(validadorDeNome() == 'laranja'){
        produto = {
        nome: nomeDoProduto,
        preco: 4.98
        }
        totalItens++

    }else if(validadorDeNome() == 'maca'){
        produto = {
        nome: nomeDoProduto,
        preco: 5.25
        }
        totalItens++

    }else if(validadorDeNome() == 'abacate'){
        produto = {
        nome: nomeDoProduto,
        preco: 8.00
        }
        totalItens++

    }else if(validadorDeNome() == 'pera'){
        produto = {
        nome: nomeDoProduto,
        preco: 7.75
        }
        totalItens++

    }else{
        produto = 0
        controle++
    }

    carrinho.push(produto);
    console.log(carrinho);

    if(carrinho != 0){
        for (i = controle; i < carrinho.length; i++){
            totalCarrinho += carrinho[i].preco
            controle ++
        }
    }else{
        valorCarrinho.innerHTML = ("Carrinho Vazio");
    }
} 

function totalCompra(){
    if(totalCarrinho != 0){
        valorCarrinho.innerHTML = (`total de itens no carrinho ${totalItens}<br>Valor Total: R$${totalCarrinho.toFixed(2)}`);

    }else{
        valorCarrinho.innerHTML = ("Carrinho Vazio");
    }
}