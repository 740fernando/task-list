const criarTarefa = (evento) =>{
    //evento passa um objeto com as informacoes
    evento.preventDefault() // prevençao de evento padrao
    
    const input = document.querySelector('[data-form-input]');
    const valor = input.value
    
    const tarefa = document.querySelector('[data-task');
    
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML=conteudo ; // propriedade do dom innerHtml= acessa conteudo da tag e colcoa o valor que foi inserido no put
    
    input.value=''//limpa o input após ser clicado

}

const novaTarefa = document.querySelector('[data-form-button]');// percorre o dom e seleciona o parametro pasado

novaTarefa.addEventListener('click', criarTarefa)



//EventListener= Elemento que recebe o evento / O que vai acontecer quando o evento disparar - Precisamos do tipo do evento, do elemento que vai receber o evento e o que vai acontecer quando o evento for disparado

// Sempre que eu estou trabalhando com eventos, é necessario saber o evento que está clicando
// addEventListerner que passa um objeto como parametro da funcao


/*
O HTML5 foi criado pensando na extensibilidade dos dados que precisam ser associados a um determinado
 elemento mas não necessariamente tem um significado definido.  Atributos data-* nos permite armazenar
  informações extras em elementos HTML padrões e semânticos, sem a necessidades de hacks como classList, atributos fora do padrão, propriedades extras no DOM ou o método depreciado setUserData.
*/