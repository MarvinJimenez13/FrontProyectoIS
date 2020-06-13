angular.module("Session", []).service("SessionService", function($window, $http){
	var SessionService = {};  
	SessionService = {
	  tryGet:tryGet,
	  set:set,
	  remove: remove
	};	
	return SessionService;
	function tryGet(name) {
		try{
			 var o = JSON.parse($window.localStorage[name]);
			 return o;
		}catch(e){
			return false;
		}
	}
	function set(name, value) {

		$window.localStorage.setItem(name, JSON.stringify(value));
	}
	function remove(name) {
		$window.localStorage.removeItem(name);
	}
});