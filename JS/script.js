let btnAddTarefa = document.querySelector("#adicionar-tarefa");
let tarefas = document.querySelector('#tarefas');
let inputTarefa = document.querySelector('#tarefa-digitada');
let listaTarefas = localStorage.getItem('listaTarefas')?JSON.parse(localStorage.getItem('listaTarefas')):[]


const salvarLocalStorage = tarefas => {
    let tarefasEmJson = JSON.stringify(tarefas)
    localStorage.setItem("listaTarefas", tarefasEmJson)
    console.log("Lista de tarefas salva com sucesso!");
    
}

const exibirNaTela = arrayTarefas => {
    arrayTarefas.forEach( textoTarefa => {
        let tarefaNova = `<div class="col-md-4">
        <div class="card-tarefa rounded">
            <div class="texto-tarefa"> 
                ${textoTarefa}
            </div>
            <div class="botao-tarefa"> <img src='Imagens/botao.png' width="30"
                    alt="botão para finalizar a tarefa" title="Botão para finalizar a tabela">
            </div>
        </div>
        </div> ` 
        tarefas.insertAdjacentHTML('beforeend', tarefaNova)
        inputTarefa.value = "";

        let objTarefaNova = tarefas.lastElementChild
        let btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild
        btnCheckTarefaNova.onclick = (event) => {
            event.target.parentNode.parentNode.parentNode.remove()
            listaTarefas = listaTarefas.filter(valor => valor != textoTarefa)
            salvarLocalStorage(listaTarefas)


    }
})
}



exibirNaTela(listaTarefas)

const TarefasEventos = () => {
    console.log(event)
    if (event.keyCode == "13" || event.type == 'click') { 
        let valorDigitado = inputTarefa.value
        if (valorDigitado == ""){
            alert("Você deve digitar uma tarefa primeiro!");
            return
    }
        listaTarefas.push(valorDigitado);
        salvarLocalStorage(listaTarefas)
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
        tarefas.insertAdjacentHTML('beforeend', tarefaNova)
        inputTarefa.value = "";

        let objTarefaNova = tarefas.lastElementChild
        let btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild
        btnCheckTarefaNova.onclick = (event) => {
            event.target.parentNode.parentNode.parentNode.remove()
        // tarefas.removeChild(event.target.parentNode.parentNode.parentNode) - Outra maneira de excluir 
        listaTarefas = listaTarefas.filter(valor => valor != valorDigitado) //apaga as tarefas quando atualiza a pagina
        salvarLocalStorage(listaTarefas)
        }
    }

}
inputTarefa.addEventListener('keypress', TarefasEventos)
    
btnAddTarefa.addEventListener('click', TarefasEventos)