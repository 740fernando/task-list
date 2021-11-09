const criarTarefa = (evento) =>{
    //evento passa um objeto com as informacoes
    evento.preventDefault() // prevençao de evento padrao
    
    const lista = document.querySelector('[data-list'); //percorre o dom
    const input = document.querySelector('[data-form-input]');
    
    const valor = input.value // armazena o valor digitado no html
    
    const tarefa = document.createElement('li') // cria um elemento do dom

    tarefa.classList.add('task');

    const conteudo = `<p class="content">${valor}</p>`;
    
    tarefa.innerHTML=conteudo; //innerHtml- cria o elemento no dom

    lista.appendChild(tarefa);
    input.value=''//limpa o input após ser clicado

}

const novaTarefa = document.querySelector('[data-form-button]');// percorre o dom e seleciona o parametro pasado

novaTarefa.addEventListener('click', criarTarefa)


// DOM - REPRESENTACAO DO HTML EM FORMAS DE NÓS

//EventListener= Elemento que recebe o evento / O que vai acontecer quando o evento disparar - Precisamos do tipo do evento, do elemento que vai receber o evento e o que vai acontecer quando o evento for disparado

// Sempre que eu estou trabalhando com eventos, é necessario saber o evento que está clicando
// addEventListerner que passa um objeto como parametro da funcao


/*
O HTML5 foi criado pensando na extensibilidade dos dados que precisam ser associados a um determinado
 elemento mas não necessariamente tem um significado definido.  Atributos data-* nos permite armazenar
  informações extras em elementos HTML padrões e semânticos, sem a necessidades de hacks como classList, atributos fora do padrão, propriedades extras no DOM ou o método depreciado setUserData.
*/