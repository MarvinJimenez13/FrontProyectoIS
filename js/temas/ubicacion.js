var map;

//Error Callback
function show_error(error){
  switch(error.code) {
       case error.PERMISSION_DENIED:
           var my = new google.maps.LatLng(19.48074521064234, -99.1310051625);
           initialize(my); 
           alert("Permiso de usuario denegado.");
           break;
       case error.POSITION_UNAVAILABLE:
           alert("Locación no disponible.");
           break;
       case error.TIMEOUT:
           alert("Petición fallida.");
           break;
       case error.UNKNOWN_ERROR:
           alert("Error desconocido..");
           break;
   }
}

if (navigator.geolocation){ 

  navigator.geolocation.getCurrentPosition(function(position){ 

      position.coords.latitude; 
      position.coords.longitude; 
  
      var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      document.getElementById("latbox").value = position.coords.latitude;
      document.getElementById("lngbox").value = position.coords.longitude;
      initialize(myLatlng);  

  },  show_error);

}else{
  
  console.log("Error.");

}

function initialize(myPos) {

var myOptions = {
   zoom: 8,
   center: myPos,
   mapTypeId: google.maps.MapTypeId.ROADMAP
   }
map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

var marker = new google.maps.Marker({
draggable: true,
position: myPos, 
map: map,
title: "Tu locación."
});

  google.maps.event.addListener(marker,'click',function(overlay,point){
    document.getElementById("latbox").value = lat();
    document.getElementById("lngbox").value = lng();
  });

   google.maps.event.addListener(marker, 'click', function (event) {
    document.getElementById("latbox").value = event.latLng.lat();
    document.getElementById("lngbox").value = event.latLng.lng();
  });
  
  google.maps.event.addListener(marker, 'click', function (event) {
    document.getElementById("latbox").value = this.getPosition().lat();
    document.getElementById("lngbox").value = this.getPosition().lng();
  });
  
  google.maps.event.addListener(marker, 'dragend', function (event) {
    document.getElementById("latbox").value = this.getPosition().lat();
    document.getElementById("lngbox").value = this.getPosition().lng();
  });

}

