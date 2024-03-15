let valorInput = document.getElementById("tarefa");
let lista = document.getElementById("lista");
let contador = 0;
let btn = document.getElementById('btn-add')

function AddTarefa() {
  let tarefa = valorInput.value;

  if (tarefa !== undefined && tarefa !== null && tarefa !== "") {
    ++contador;

    let novoItem = `
        <div class="tarefa" id="${contador}">
        <div  class="item-icone">
            <i onclick="ItemClicado(${contador})" class="material-symbols-outlined">
                check
            </i>
        </div>
        <div id="nomeinput" class="item-nome">
            ${tarefa}
        </div>
        <div class="item-botao" onclick="remove(${contador})">
            <i class="material-symbols-outlined">
                delete
            </i>
        </div>
    </div>
        `;

    lista.innerHTML += novoItem;
    valorInput.value = "";
    tarefa.focus();
  }
}

function remove(id) {
  tarefa = document.getElementById(id);
  tarefa.remove();
}

function ItemClicado(id) {
  let item = document.getElementById(id);
  let classe = item.getAttribute("class");

  if (classe == "tarefa") {
    item.classList.add("itemClicado");

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("itemClicado");
  }
}

valorInput.addEventListener("keyup", function (event){
    if (event.keyCode === 13){
        event.preventDefault();
        btn.click();
    }
})