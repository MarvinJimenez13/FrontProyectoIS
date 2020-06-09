var myApp = angular.module("Home", []);
var home = function($scope, $http){

    $scope.registro = {};
    $scope.link = "index.html#registroPivote";
    var urlAPI = 'https://proyectoresistencias.herokuapp.com/resistencia';
    $scope.registrarResistencia = function(registro){
        $scope.registro.nominal = document.getElementById("valorNominal").value;
        $scope.registro.tolerancia = document.getElementById("tolerancia").value;
        console.log($scope.registro);
        $http.post(urlAPI, JSON.stringify($scope.registro), { headers : {'Content-Type': 'application/json'} })
			.then(function(response) {
			   alert(response.data);
			   window.location.href = $scope.link;
			});
    }

}

myApp.controller("registro", ['$scope', '$http', home]);