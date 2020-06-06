var map;
let RANGO_BUSQUEDA = 2000;
var auxMarker = [];

function initMap() {
	var infowindow = new google.maps.InfoWindow();
	map = new google.maps.Map(document.getElementById('map_canvas'), {
		zoom: 13,
		center: {lat: 19.4326077, lng: -99.13320799999},
	});
	var geojson = [];
	
	var url =  'http://localhost:8080/ProAtHome/apiProAtHome/profesor/obtenerSesionesMovil';
	
	var myLatLng = {lat: 19.4326077, lng: -99.13320799999};
	var iconImage = '../assets/img/profubb.png';
	var markerEs = new google.maps.Marker({
		position: myLatLng,
		draggable: true,
		map: map,
		title: 'Nuestro marcador :)',
		icon: iconImage
	  });

	var sunCircle = { 
		strokeColor: "#185a75", 
		strokeOpacity: 0.8, 
		strokeWeight: 2, 
		fillColor: "#185a75", 
		fillOpacity: 0.35, 
		map: map, 
		center: markerEs.position, 
		radius: RANGO_BUSQUEDA// in meters 
		}; 
		cityCircle = new google.maps.Circle(sunCircle) 
		cityCircle.bindTo('center', markerEs, 'position');

	google.maps.event.addListener(markerEs, 'click', function() { 
		infowindow.setContent("<div style='width:150px; text-align: center;'><strong>Tú marcador ;)</strong><br>Mueve el marcado para buscar clases.<br></div>");
		infowindow.setPosition(markerEs.position);
		infowindow.open(map);
	}); 

	var client = new HttpClient(true);
	client.get(url, function(response) {
		geojson = JSON.parse(response);
		for(marker in geojson){
			var myLatLng = {lat: geojson[marker].latitud, lng: geojson[marker].longitud};
			var markersEstudiantes = new google.maps.Marker({
				position: myLatLng,
				draggable: false,
				map: map, 
				title: 'Clase - Nivel ' + geojson[marker].lugar,
			  });
			//markersEstudiantes.setVisible(false);  
			//mostrarMarcadores(markerEs.position, markersEstudiantes.position, markersEstudiantes);
			google.maps.event.addListener(markersEstudiantes, 'click', (function(markersEstudiantes, marker) {
				return function() {
					infowindow.setContent("<div style='width:150px; text-align: center;'><strong>"+ markersEstudiantes.title +"</strong><br><a href=''>Ver Clase</a></div>");
					infowindow.open(map, markersEstudiantes);
				}
		   })(markersEstudiantes, marker));
		   auxMarker.push(markersEstudiantes);
		   
		}

		console.log(auxMarker.length);
	});
	console.log(auxMarker.length);
	Array.prototype.forEach.call(auxMarker, function(markerElement){
		console.log(markerElement.title);
		console.log(map);
	});
	
	
/*
	google.maps.event.addListener(markerEs, 'dragend', function() { 
		client.get(url, function(response) {
			geojson = JSON.parse(response);
			for(marker in geojson){
				var myLatLng = {lat: geojson[marker].latitud, lng: geojson[marker].longitud};
				markersEstudiantes = new google.maps.Marker({
					position: myLatLng,
					draggable: false,
					map: map, 
					title: 'Clase - Nivel ' + geojson[marker].lugar,
				  });
				//markersEstudiantes.setVisible(false);  
				auxMarker.push(new google.maps.Marker(markersEstudiantes));
				mostrarMarcadores(markerEs.position, markersEstudiantes.position, markersEstudiantes);
				google.maps.event.addListener(markersEstudiantes, 'click', (function(markersEstudiantes, marker) {
					return function() {
						infowindow.setContent("<div style='width:150px; text-align: center;'><strong>"+ markersEstudiantes.title +"</strong><br><a href=''>Ver Clase</a></div>");
						infowindow.open(map, markersEstudiantes);
					}
			   })(markersEstudiantes, marker));

			   
			}

		});

	}); */

}

function mostrarMarcadores(profesor, marcador, marker){

	latProfesor = profesor.lat();
	longProfesor = profesor.lng();
	latMarcador = marcador.lat();
	longMarcador = marcador.lng();

	var distancia = distanciaEntre(latProfesor, longProfesor, latMarcador, longMarcador);
	if(distancia <= RANGO_BUSQUEDA){
		marker.setVisible(true);
	}else{
		marker.setVisible(false);
	}

}

function distanciaEntre(lat1, long1, lat2, long2){
	let radio = 6371000;
	var dLat =  (lat2- lat1) * (Math.PI/180);
	var dLng = (long2- long1) * (Math.PI/180);
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * (Math.PI/180)) * Math.cos(lat2 * (Math.PI/180)) * Math.sin(dLng/2) * Math.sin(dLng/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var distancia = radio * c;
	return distancia;
}