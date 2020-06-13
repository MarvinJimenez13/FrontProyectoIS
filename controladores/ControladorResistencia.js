var myApp = angular.module("Resistencia", ['Session']);

var gestion = function($scope, $http, SessionService){
    if((idResistencia = SessionService.tryGet("idResistencia")) === false)
        window.location.href = 'gestion.html';

    $scope.resistencia = {};    
    $scope.eliminar = {};
    
    $scope.cargarResistencia = function(){
        $http.get('http://localhost:3000/resistencia/' + idResistencia).then(function(response){ 
            $scope.resistencia.tipo = response.data[0].tipo;
            $scope.resistencia.color1 = response.data[0].colores.color1.toLowerCase();
            $scope.resistencia.color2 = response.data[0].colores.color2.toLowerCase();
            $scope.resistencia.color3 = response.data[0].colores.color3.toLowerCase();
            $scope.resistencia.color4 = response.data[0].colores.color4.toLowerCase();
            $scope.resistencia.idResistencia = response.data[0]._id;
            document.getElementById("valorNominal").value = response.data[0].valorNominal;
            document.getElementById("tolerancia").value = response.data[0].tolerancia;
            document.getElementById("potencia").value = response.data[0].potencia;
            document.getElementById("Rcolor1").src = "assets/images/resistencia/" + response.data[0].colores.color1 + ".gif";
            document.getElementById("Rcolor2").src = "assets/images/resistencia/" + response.data[0].colores.color2 + ".gif";
            document.getElementById("Rcolor3").src = "assets/images/resistencia/" + response.data[0].colores.color3 + ".gif";
            document.getElementById("Rcolor4").src = "assets/images/resistencia/" + response.data[0].colores.color4 + ".gif";
        });
    }

    $scope.eliminarResistencia = function(id){
        var confirmar = confirm("¿Desea eliminar la resistencia?");
        if(confirmar){
            $scope.eliminar.id = idResistencia;
            $http.post('http://localhost:3000/eliminarResistencia', JSON.stringify($scope.eliminar), { headers : {'Content-Type': 'application/json'} }).then(function(response){
                alert(response.data);
                window.location.href = 'gestion.html';
            });
        }
    }

    $scope.cargarResistencia();
}

myApp.controller("gestionResistencia", ['$scope', '$http', 'SessionService', gestion]);