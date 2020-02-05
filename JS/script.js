let btnAddTarefa = document.querySelector("#adicionar-tarefa")
let tarefas = document.querySelector('#tarefas')
let inputTarefa = document.querySelector('#tarefa-digitada')


btnAddTarefa.onclick = function(){

    let valorDigitado = inputTarefa.value

    let tarefaNova = `<div class="col-md-4">
    <div class="card-tarefa rounded">
        <div class="texto-tarefa"> 
            ${valorDigitado}
        </div>
        <div class="botao-tarefa"> <img src='Imagens/botao.png' width="30"
                alt="botão para finalizar a tarefa" title="Botão para finalizar a tabela">
        </div>
    </div>
    </div> `

    tarefas.innerHTML += tarefaNova
    inputTarefa.value = ""

}

