function verFoto(){

    var div = document.getElementById("vistaInfo");
    div.style.display = "none";
    div = document.getElementById("vistaDatosBancarios");
    div.style.display = "none";
    div = document.getElementById("vistaFoto");
    div.style.display = "block";

}

function verInfo(){

    var div = document.getElementById("vistaFoto");
    div.style.display = "none";
    div = document.getElementById("vistaDatosBancarios");
    div.style.display = "none";
    div = document.getElementById("vistaInfo");
    div.style.display = "block";

}

function verDatosBancarios(){

    var div = document.getElementById("vistaFoto");
    div.style.display = "none";
    div = document.getElementById("vistaInfo");
    div.style.display = "none";
    div = document.getElementById("vistaDatosBancarios");
    div.style.display = "block";

}