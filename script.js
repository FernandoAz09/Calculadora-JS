/* ---- Insere numero----- */

function insert(num) {
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}


/* ---- Apaga tudo CA (clear all) ---- */

function clearAll() {
    document.getElementById('resultado').innerHTML = ""
}