var myApp = angular.module("Gestion", ['Session']);

var gestion = function($scope, $http, SessionService){
    SessionService.remove('idResistencia');
    
    $scope.cargarResistencias = function(){
        $http.get('http://localhost:3000/resistencias').then(function(response){
            $scope.resistencias = response.data;
        });
    }
    
    $scope.detallesResistencia = function(id){
        SessionService.set('idResistencia', id);
        window.location.href = 'resistencia.html';    
    }
    
    $scope.cargarResistencias();
}

myApp.controller("gestion", ['$scope', '$http', 'SessionService', gestion]);