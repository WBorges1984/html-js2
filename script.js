// Método simples para adicionar o título
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.innerText = 'Bem-vindo à Nossa Loja Virtual';
document.body.appendChild(titulo);

// Método complexo para adicionar o produto
const produto = document.createElement('div');

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Açaí Premium';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Delicioso açaí orgânico com granola e frutas frescas.';

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$19,99';

// Adicionando uma imagem ao produto (opcional)
const imagemProduto = document.createElement('img');
imagemProduto.src = 'caminho-para-imagem.jpg'; // Substitua pelo caminho correto da imagem
imagemProduto.alt = 'Imagem do Açaí Premium';

// Montando o elemento do produto
produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imagemProduto); // Remova esta linha se não quiser adicionar uma imagem

// Adicionando o produto ao corpo do documento
document.body.appendChild(produto);

