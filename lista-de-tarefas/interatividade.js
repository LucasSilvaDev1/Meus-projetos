let contador = 0;
let inpuT = document.getElementById("input");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("main");

function addTarefa() {
  let valorInput = inpuT.value;

  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;

    let novoItem = `
    <div id="${contador}" class="item">
    <div onclick="ItemClicado(${contador})"class="item-icone">
        <i class="material-symbols-outlined"  id="icone_${contador}" >
            radio_button_unchecked
        </i>
    </div>
    <div class="item-nome">
        ${valorInput}
    </div>
    <div class="item-botao">
        <button onclick="Deletar(${contador})" class="delete"><i class="material-symbols-outlined">delete</i></button>
        </div>
    </div>`;

    main.innerHTML += novoItem;

    inpuT.value = "";
    inpuT.focus();
  }
}

function Deletar(id){
  var tarefa = document.getElementById(id)
  tarefa.remove()
}

function ItemClicado(id){
  var item = document.getElementById(id);
  var classe = item.getAttribute('class');

  if (classe=="item"){
    item.classList.add('item-clicado');

    var icone = document.getElementById('icone_'+id);
    icone.innerHTML = ''
    icone.innerHTML = 'done';

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove('item-clicado');

    var icone = document.getElementById('icone_'+id)
    icone.innerHTML = ''
    icone.innerHTML = 'radio_button_unchecked'
  }
}

input.addEventListener("keyup", function (event){
  //SE TECLOU ENTER (13)
  if (event.keyCode === 13){
      event.preventDefault();
      btnAdd.click();
  }
})