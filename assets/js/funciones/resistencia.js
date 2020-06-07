function evaluar(){
    var inputValorN = document.getElementById("valorNominal");
    inputValorN.value = parseInt(primerColor() + segundoColor())*tercerColor() + " Ohms +/-" + cuartoColor();
    var tolerancia = document.getElementById("tolerancia");
    tolerancia.value = "+/-" + cuartoColor();
}

function primerColor(){
    var valor;
    var selected = document.getElementById("color1").value;
    if(selected == "negro"){
        document.getElementById("Rcolor1").src = "assets/images/resistencia/Negro.gif";
        valor = "0";
    }    
    else if(selected == "marron"){ 
        document.getElementById("Rcolor1").src = "assets/images/resistencia/Marron.gif";  
        valor = "1";
    }    
    else if(selected == "rojo"){ 
        document.getElementById("Rcolor1").src = "assets/images/resistencia/Rojo.gif"; 
        valor = "2";
    }     
    else if(selected == "naranja"){ 
        document.getElementById("Rcolor1").src = "assets/images/resistencia/Naranja.gif";  
        valor = "3";
    }    
    else if(selected == "amarillo"){ 
        document.getElementById("Rcolor1").src = "assets/images/resistencia/Amarillo.gif";  
        valor = "4";
    }    
    else if(selected == "verde"){ 
        document.getElementById("Rcolor1").src = "assets/images/resistencia/Verde.gif";  
        valor = "5";
    }        
    else if(selected == "azul"){ 
        document.getElementById("Rcolor1").src = "assets/images/resistencia/Azul.gif";  
        valor = "6";
    }    
    else if(selected == "violeta"){ 
        document.getElementById("Rcolor1").src = "assets/images/resistencia/Violeta.gif"; 
        valor = "7";
    }     
    else if(selected == "gris"){
        document.getElementById("Rcolor1").src = "assets/images/resistencia/Gris.gif";  
        valor = "8";
    } 
    else if(selected == "blanco"){
        document.getElementById("Rcolor1").src = "assets/images/resistencia/Blanco.gif";        
        valor = "9";
    } 
    
    return valor;

}

function segundoColor(){
    var valor;
    var selected = document.getElementById("color2").value;
    if(selected == "negro"){
        document.getElementById("Rcolor2").src = "assets/images/resistencia/Negro.gif";
        valor = "0";
    }    
    else if(selected == "marron"){ 
        document.getElementById("Rcolor2").src = "assets/images/resistencia/Marron.gif";  
        valor = "1";
    }    
    else if(selected == "rojo"){
        document.getElementById("Rcolor2").src = "assets/images/resistencia/Rojo.gif"; 
        valor = "2"; 
    } 
    else if(selected == "naranja"){
        document.getElementById("Rcolor2").src = "assets/images/resistencia/Naranja.gif";  
        valor = "3";
    } 
    else if(selected == "amarillo"){
        document.getElementById("Rcolor2").src = "assets/images/resistencia/Amarillo.gif";  
        valor = "4";
    } 
    else if(selected == "verde"){
        document.getElementById("Rcolor2").src = "assets/images/resistencia/Verde.gif";  
        valor = "5";
    } 
    else if(selected == "azul"){
        document.getElementById("Rcolor2").src = "assets/images/resistencia/Azul.gif";  
        valor = "6";
    } 
    else if(selected == "violeta"){
        document.getElementById("Rcolor2").src = "assets/images/resistencia/Violeta.gif";  
        valor = "7";
    } 
    else if(selected == "gris"){
        document.getElementById("Rcolor2").src = "assets/images/resistencia/Gris.gif";  
        valor = "8";
    } 
    else if(selected == "blanco"){
        document.getElementById("Rcolor2").src = "assets/images/resistencia/Blanco.gif";  
        valor = "9";
    } 
    
    return valor;

}

function tercerColor(){
    var valor;
    var selected = document.getElementById("color3").value;
    if(selected == "negro"){
        document.getElementById("Rcolor3").src = "assets/images/resistencia/Negro.gif";
        valor = 1;
    }
    else if(selected == "marron"){
        document.getElementById("Rcolor3").src = "assets/images/resistencia/Marron.gif"; 
        valor = 10; 
    } 
    else if(selected == "rojo"){
        document.getElementById("Rcolor3").src = "assets/images/resistencia/Rojo.gif";  
        valor = 100;
    } 
    else if(selected == "naranja"){
        document.getElementById("Rcolor3").src = "assets/images/resistencia/Naranja.gif"; 
        valor = 1000; 
    } 
    else if(selected == "amarillo"){
        document.getElementById("Rcolor3").src = "assets/images/resistencia/Amarillo.gif";  
        valor = 10000;
    } 
    else if(selected == "verde"){
        document.getElementById("Rcolor3").src = "assets/images/resistencia/Verde.gif";  
        valor = 100000;
    } 
    else if(selected == "azul"){
        document.getElementById("Rcolor3").src = "assets/images/resistencia/Azul.gif";  
        valor = 1000000;
    } 
    else if(selected == "violeta"){
        document.getElementById("Rcolor3").src = "assets/images/resistencia/Violeta.gif";  
        valor = 10000000;
    } 
    else if(selected == "gris"){
        document.getElementById("Rcolor3").src = "assets/images/resistencia/Gris.gif";  
        valor = 100000000;
    } 
    else if(selected == "blanco"){
        document.getElementById("Rcolor3").src = "assets/images/resistencia/Blanco.gif";   
        valor = 1000000000;
    } 
    else if(selected == "dorado"){
        document.getElementById("Rcolor3").src = "assets/images/resistencia/Dorado.gif";  
        valor = 0.1;
    } 
    else if(selected == "plateado"){
        document.getElementById("Rcolor3").src = "assets/images/resistencia/Plateado.gif";  
        valor = 0.01;     
    } 

    return valor;

}

function cuartoColor(){
    var valor;
    var selected = document.getElementById("color4").value;
    if(selected == "ninguna"){
        document.getElementById("Rcolor4").src = "assets/images/resistencia/spacer.gif";
        valor = "20%";
    }
    else if(selected == "dorado"){
        document.getElementById("Rcolor4").src = "assets/images/resistencia/Dorado.gif";  
        valor = "5%";
    } 
    else if(selected == "plateado"){
        document.getElementById("Rcolor4").src = "assets/images/resistencia/Plateado.gif";  
        valor = "10%";  
    } 

    return valor;
}