Projeto relacionado ao módulo de introdução, linguagem e lógica de programação - JavaScript

Desenvolva uma tela para simular a consulta de preços, o armazenamento de dados em um carrinho e a compra de produtos de uma mercearia;

01 - Etapa - HTML

A tela deve conter os seguintes elementos:

• Nome da loja
• Nome dos produtos disponíveis
• Input para informar o nome do produto (ID="nomeProduto)
• Botão para consultar o valor do produto (onclick="nome da função)
• Div vazia com ID "valorProduto"
• Botão para colocar o produto no carrinho de compras
• Botão para comprar produto consultado

-----------------------------------------------------------------------------------------------

02 - Etapa - javaScript

• Criar variáveis com o preço dos produtos disponíveis na sua loja
• Capturar o valor do produto digitado pelo usuário (nomeProduto) e atribuir em uma variável
• Capturar o valor da div vazia "valorProduto" e armazenar em uma variável
• Realize a criação de um algoritmo que retorne o valor para o usuário quando ele clica no botão "Consultar o valor do produto", a resposta deve ser devolvida na div vazia "valorProduto".

Exemplo:
valorProduto.innerText = 'As Maças custam: R$ ${maca}`

-----------------------------------------------------------------------------------------------

03 - Epata - Adicione um evento ao botão de colocar no carrinho

Para o botão de colocar no carrinho, adicione um evento de clique. O nome do produto deve ser inserido em um array de lista de compras do usuário(carrinho), ou seja, dar um ‘push’ do nome ou objeto produto (formado por nome) na variável carrinho (array)

-----------------------------------------------------------------------------------------------

Etapa 04 - Inserir uma função no botão "finalizar compra" para consultar os itens no carrinho (imprimir o array no console) e o valor total da compra.

Retornar ‘Carrinho vazio’ caso o valor seja 0.

-----------------------------------------------------------------------------------------------

Etapa 5 - Coloque na tela o valor total de itens no carrinho e o valor total da compra do usuário de forma dinâmica

Mostre dinamicamente o número de produtos presentes no carrinho do usuário e o valor total do compra, posicione uma tag de texto para receber este valor no HTML (ativar através de uma função onclick) e sempre que o usuário clicar em "finalizar a compra" os valores devem ser atualizados.