/* Chave da API para push da ação do tempo */

let chave = 'cebcd482eda57fa9a6714c1c2ba91885';

/* Função criada para fazer a interação com o HTML e alteração das informações a cada pesquisa */ 

function colocarNaTela(dados){
  console.log(dados)

  document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
  document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + 'ºC'
  document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon +".png"
  document.querySelector('.umidade').innerHTML = "Umidade: " + Math.floor(dados.main.humidity) + "%"
}

/* API criada para o funcionamento completo da busca */ 


async function buscarCidade(cidade) {
  let dados = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric'
  ).then((resposta) => resposta.json());

  colocarNaTela(dados);
}

/* Função criada para puxar os dados da API ao pesquisar a cidade */ 


function cliqueiNoBotao() {
  let cidade = document.querySelector('.input-cidade').value;

  buscarCidade(cidade);
}
