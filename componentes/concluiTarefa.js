//BotaoConclui é um componenet, foi utilizado letra maiuscula para diferenciar da funcao
const BotaoConclui = () =>{
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button'); // adicona classe css
    botaoConclui.innerText= 'concluir';

    botaoConclui.addEventListener('click',concluirTarefa)

    return botaoConclui;

}
const concluirTarefa = (evento) =>{
    const botaoConclui = evento.target// quero saber o alvo do evento, ou seja, quando eu clicar, eu quero saber onde eu cliquei

    const tarefaCompleta = botaoConclui.parentElement// tarefaCompleta recebe o pai da funcao botaoConclui, ou seja, a <li>

    tarefaCompleta.classList.toggle('done') // toggle- executa a classe css(efeito de riscado) a partir do momento que é clicado no botao
}
export default BotaoConclui;