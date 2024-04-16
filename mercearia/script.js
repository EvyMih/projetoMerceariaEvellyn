// Variáveis com os preços dos produtos em estoque.
let arroz = 10, feijao = 8, suco = 6, macarrao = 5, ovo = 8;

// Array com produtos selecionados pelo usuário para o carrinho.
let carrinho = [];

// Variáveis para puxar os dados dos IDs do HTML.
let nomeDoProduto = document.getElementById ("nomeDoProduto");
let valorProduto = document.getElementById ("valorProduto");
let valorFinal = document.getElementById ("valorFinal");

// Variável de controle para condições.
var validar = true;

// Variáveis contadoras dos produtos em estoque.
let contadorArroz = 0, contadorFeijao = 0, contadorSuco = 0, contadorMacarrao = 0, contadorOvo = 0;

// Variáveis com os preços finais dos produtos selecionados pelo usuário.
let totalArroz = 0, totalFeijao = 0, totalSuco = 0, totalMacarrao = 0, totalOvo = 0;

// Variável para armazenar total do carrinho do usuário.
let totalValor = 0;

// Função para quando o usuário clicar no botão "consultar valor" aparecer o valor correto dos produtos em estoque.
function mostrarValor(){
    switch(nomeDoProduto.value.toLowerCase()){
        case "arroz":
            valorProduto.innerHTML = `O Arroz custa: R$ ${arroz.toFixed(2)}`
        break;
        case "feijao":
            valorProduto.innerHTML = `O Feijão custa: R$ ${feijao.toFixed(2)}`
        break;
        case "suco":
            valorProduto.innerHTML = `O Suco de Uva custa: R$ ${suco.toFixed(2)}`
        break;
        case "macarrao":
            valorProduto.innerHTML = `O Macarrão custa: R$ ${macarrao.toFixed(2)}`
        break;
        case "ovo":
            valorProduto.innerHTML = `O Ovo custa: R$ ${ovo.toFixed(2)}`
        break;

        default: 
            valorProduto.innerHTML = "Produto indisponível"
    }
}
// Função para que quando o usuário clicar em "Adicionar ao Carrinho" adicione o produto desejado no array "carrinho" e adiciona a quantidade de cada produto digitado nos contadores.
function adicionarCarrinho(){

    if(nomeDoProduto.value == "arroz".toLowerCase()){
        carrinho.push(nomeDoProduto.value);
        contadorArroz ++
    }

    if(nomeDoProduto.value == "feijao".toLowerCase()){
        carrinho.push(nomeDoProduto.value);
        contadorFeijao ++
    }

    if(nomeDoProduto.value == "suco".toLowerCase()){
        carrinho.push(nomeDoProduto.value);
        contadorSuco ++
    }

    if(nomeDoProduto.value == "macarrao".toLowerCase()){
        carrinho.push(nomeDoProduto.value);
        contadorMacarrao ++
    }

    if(nomeDoProduto.value == "ovo".toLowerCase()){
        carrinho.push(nomeDoProduto.value);
        contadorOvo ++
    }

console.log(carrinho);
console.log(`Arroz: ${contadorArroz}, Feijão: ${contadorFeijao}, Suco: ${contadorSuco}, Macarrão: ${contadorMacarrao}, Ovo: ${contadorOvo}`);
}

function finalizarCompra(){
    totalArroz = (contadorArroz * arroz);
    totalFeijao = (contadorFeijao * feijao);
    totalSuco = (contadorSuco * suco);
    totalMacarrao = (contadorMacarrao * macarrao);
    totalOvo = (contadorOvo * ovo);

    totalValor = (totalArroz + totalFeijao + totalSuco + totalMacarrao + totalOvo);

    valorFinal.innerHTML = ("O total da sua compra esta em R$ " + totalValor.toFixed(2))

    if (totalValor == 0){
        valorFinal.innerHTML = "Carrinho Vazio!"
    }
}