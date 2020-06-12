var myApp = angular.module("Gestion", ['Session']);

var gestion = function($scope, $http, SessionService){
    $scope.cargarResistencias = function(){
        $http.get('http://localhost:3000/resistencias').then(function(response){
            $scope.resistencias = response.data;
            console.log($scope.resistencias);
        });
    }
    $scope.cargarResistencias();
}

myApp.controller("gestion", ['$scope', '$http', 'SessionService', gestion]);