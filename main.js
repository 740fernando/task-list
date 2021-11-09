import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'
    const criarTarefa = (evento) =>{
    //evento passa um objeto com as informacoes
    evento.preventDefault() // prevençao de evento padrao
    
    const lista = document.querySelector('[data-list'); //percorre o dom
    const input = document.querySelector('[data-form-input]');
    
    const valor = input.value // armazena o valor digitado no html
    
    const tarefa = document.createElement('li') // cria um elemento do dom

    tarefa.classList.add('task'); // adiciona um classe dentro de uma classe ja existente

    const conteudo = `<p class="content">${valor}</p>`;
    
    tarefa.innerHTML=conteudo; //innerHtml- cria o elemento no dom

    tarefa.appendChild(BotaoConclui()); // coloca botao dentro da li
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);// coloca tarefa dentro da li
    input.value=''//limpa o input após ser clicado

}
const novaTarefa = document.querySelector('[data-form-button]');// percorre o dom e seleciona o parametro pasado
novaTarefa.addEventListener('click', criarTarefa);

/*

Vamos utilizar a “IIFE”, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”.
 Vamos colocar todo esse nosso arquivo dentro de um escopo de uma função. Então, a primeira coisa que
 vamos fazer é colocar dois parênteses, um no começo e um no final do nosso arquivo, e a nossa função já 
 está dentro desses parênteses. Agora, vamos utilizar uma função anônima para executar.
   Essa função anônima vai receber uma arrow function e essa arrow function tem duas chaves, 
 uma vai no começo e uma vai no final, antes do parênteses. Vou dar um “Enter” para quebrar, 
 e tudo certo, nós colocamos dentro do escopo da função.


Através da variável botaoConclui capturamos qual elemento foi clicado, 
depois utilizamos a propriedade parentElement para subir um nó na árvore, 
por fim colocamos o método toggle que vai adicionar a classe done quando clicarmos no botão

DOM - REPRESENTACAO DO HTML EM FORMAS DE NÓS

EventListener= Elemento que recebe o evento / O que vai acontecer quando o evento disparar - Precisamos do tipo do evento, do elemento que vai receber o evento e o que vai acontecer quando o evento for disparado

Sempre que eu estou trabalhando com eventos, é necessario saber o evento que está clicando
addEventListerner que passa um objeto como parametro da funcao



O HTML5 foi criado pensando na extensibilidade dos dados que precisam ser associados a um determinado
 elemento mas não necessariamente tem um significado definido.  Atributos data-* nos permite armazenar
  informações extras em elementos HTML padrões e semânticos, sem a necessidades de hacks como classList, atributos fora do padrão, propriedades extras no DOM ou o método depreciado setUserData.
*/