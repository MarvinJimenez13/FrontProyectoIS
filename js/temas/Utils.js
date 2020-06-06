function $_GET(q,s) {
	s = (s) ? s : window.location.search;
	var re = new RegExp('&amp;'+q+'=([^&amp;]*)','i');
	return (s=s.replace(/^\?/,'&amp;').match(re)) ?s=s[1] :s='';
};
function get(name){
  var url = window.location.search;
  var num = url.search(name);
  var namel = name.length;
  var frontlength = namel+num+1; //length of everything before the value 
  var front = url.substring(0, frontlength);  
  url = url.replace(front, "");  
  num = url.search("&");

 if(num>=0) return url.substr(0,num); 
 if(num<0)  return url;             
}
var HttpClient = function($async) {
	this.get = function(aUrl, aCallback) {
		var anHttpRequest = new XMLHttpRequest();
		anHttpRequest.onreadystatechange = function() { 
			if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
				aCallback(anHttpRequest.responseText);
		};
		anHttpRequest.open( "GET", aUrl, $async );            
		anHttpRequest.send( null );
	};
};