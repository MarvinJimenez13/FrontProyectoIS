

var map;

initialize();  

function initialize(){

    //var idSesion = getCookie('idClase');
    var idSesion = localStorage.idClase;
    var linkDetallesSesion = "http://localhost:8080/ProAtHome/apiProAtHome/cliente/detallesSesion/" + idSesion;
    var myPos;
    var client = new HttpClient(true);
	  client.get(linkDetallesSesion, function(response) {
      geojson = JSON.parse(response);
      
      myPos = new google.maps.LatLng(geojson.latitud, geojson.longitud);
      var myOptions = {
          zoom: 8,
          center: myPos,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
      map = new google.maps.Map(document.getElementById("map_canvas_detalles"), myOptions); 
      document.getElementById("latboxg").value = geojson.latitud;
      document.getElementById("lngboxg").value = geojson.longitud;
      var marker = new google.maps.Marker({
        draggable: true,
        position: myPos, 
        map: map,
        title: "Tu locación."
      });
    
      google.maps.event.addListener(marker,'click',function(overlay,point){
        document.getElementById("latboxg").value = lat();
        document.getElementById("lngboxg").value = lng();
      });
    
        google.maps.event.addListener(marker, 'click', function (event) {
        document.getElementById("latbox").value = event.latLng.lat();
        document.getElementById("lngbox").value = event.latLng.lng();
      });
      
      google.maps.event.addListener(marker, 'click', function (event) {
        document.getElementById("latboxg").value = this.getPosition().lat();
        document.getElementById("lngboxg").value = this.getPosition().lng();
      });
      
      google.maps.event.addListener(marker, 'dragend', function (event) {
        document.getElementById("latboxg").value = this.getPosition().lat();
        document.getElementById("lngboxg").value = this.getPosition().lng();
      });

  });

}

