var myApp = angular.module("Home", ['Session']);
var home = function($scope, $http, SessionService){
    SessionService.remove('idResistencia');

    $scope.registro = {};
    $scope.link = "index.html#registroPivote";
    var urlAPI = 'https://proyectoresistencias.herokuapp.com/resistencia';
    $scope.registrarResistencia = function(registro){
        var colores = {
            color1: document.getElementById("color1Input").value.charAt(0).toUpperCase() + document.getElementById("color1Input").value.slice(1),
            color2: document.getElementById("color2Input").value.charAt(0).toUpperCase() + document.getElementById("color2Input").value.slice(1),
            color3: document.getElementById("color3Input").value.charAt(0).toUpperCase() + document.getElementById("color3Input").value.slice(1),
            color4: document.getElementById("color4Input").value.charAt(0).toUpperCase() + document.getElementById("color4Input").value.slice(1),
        }
        $scope.registro.nominal = document.getElementById("valorNominal").value;
        $scope.registro.tolerancia = document.getElementById("tolerancia").value;
        $scope.registro.colores = colores;
        if($scope.registro.tipo != null && $scope.registro.nominal != null && $scope.registro.tolerancia != null && $scope.registro.potencia != null){
            console.log($scope.registro);
            $http.post(urlAPI, JSON.stringify($scope.registro), { headers : {'Content-Type': 'application/json'} })
                .then(function(response) {
                   alert(response.data);
                   window.location.href = $scope.link;
                });
        }else{
            alert("Llena todos lo campos.");
        }
    }

}

myApp.controller("registro", ['$scope', '$http', 'SessionService', home]);