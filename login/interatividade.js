function Testar(){
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    
    if (pass.value === 0){
        window.alert = 'oi'
    }else {
        window.alert = 'oioi'
    }

}

function salvarNome(){
    var nome = document.getElementsByClassName('NomeUsuário').value;
    localStorage.setItem('nomeUsuario', nome);
}