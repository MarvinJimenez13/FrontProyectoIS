var myApp = angular.module("Home", []);
var home = function($scope, $http){

    $scope.registro = {};
    $scope.link = "index.html#registroPivote";
    var urlAPI = 'http://localhost:3000/resistencia';
    $scope.registrarResistencia = function(registro){
        var colores = {
            color1: document.getElementById("color1Input").value,
            color2: document.getElementById("color2Input").value,
            color3: document.getElementById("color3Input").value,
            color4: document.getElementById("color4Input").value
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

myApp.controller("registro", ['$scope', '$http', home]);