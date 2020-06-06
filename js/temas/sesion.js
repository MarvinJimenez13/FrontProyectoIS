function continuar(){

    var validar = document.getElementById("formLugar");
    var validar2 = document.getElementById("formHorario");
    var validar3 = document.getElementById("formSesion");
    if(validar.value != "" && validar2.value != "" && validar3.value != ""){

    var segundaParte = document.getElementById("segundaParte");
    segundaParte.style.display = "block";
    var primeraParte = document.getElementById("primeraParte");
    primeraParte.style.display = "none";
    var botonesPrimeraP = document.getElementById("botonContinuar");
    botonesPrimeraP.style.display = "none";
    var botonesSegundaP = document.getElementById("botonRegresar");
    botonesSegundaP.style.display = "block";
    var botonesSegundaP2 = document.getElementById("botonRegresar2");
    botonesSegundaP2.style.display = "block";

    }else{

        alert("Llena todos los campos.");

    }

}

function regresar(){

    var segundaParte = document.getElementById("segundaParte");
    segundaParte.style.display = "none";
    var primeraParte = document.getElementById("primeraParte");
    primeraParte.style.display = "block";
    var botonesSegundaP = document.getElementById("botonContinuar");
    botonesSegundaP.style.display = "block";
    var botonesSegundaP = document.getElementById("botonRegresar");
    botonesSegundaP.style.display = "none";
    var botonesSegundaP2 = document.getElementById("botonRegresar2");
    botonesSegundaP2.style.display = "none";

}

function verNuevaSesion(){
    var gestion = document.getElementById("containerBodyGestion");
    gestion.style.display = "none";
    var body = document.getElementById("map");
    body.style.display = "block";
}

function verGestion(){
    var gestion = document.getElementById("containerBodyGestion");
    gestion.style.display = "block";
    var body = document.getElementById("map");
    body.style.display = "none";
}