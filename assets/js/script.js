/* ---- Insere numero----- */

function insert(num) {
    var numero = document.getElementById('resultado').innerHTML
    var maisDeUmNum = numero + num
    document.getElementById('resultado').innerHTML = maisDeUmNum
}


/* ---- Apaga tudo CA (clear all) ---- */

function clearAll() {
    document.getElementById('resultado').innerHTML = ""
}

/* ---- Apaga ultimo, backspace ---- */

function backspace() {
    var back = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = back.substring(0, back.length - 1)
}

/* ---- Calcular ---- */

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado) //EVAL é uma bosta -.-"
    }else{
        document.getElementById('resultado').innerHTML = "nada..."
    }
}
