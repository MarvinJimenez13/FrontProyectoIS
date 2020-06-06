function verMapa(){
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