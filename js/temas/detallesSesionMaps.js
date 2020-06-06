	var map;

	var id_Sesion;

	function setIdSesion(idSesion){

	this.id_Sesion = idSesion;


	}

	function initMap() {
	var infowindow = new google.maps.InfoWindow();
	map = new google.maps.Map(document.getElementById('map_canvas_detalles'), {
		zoom: 13,
		center: {lat: 19.357, lng: -99.182},
	});
	var geojson;
	console.log(id_Sesion);
	var url =  "http://localhost:8080/ProAtHome/apiProAtHome/cliente/obtenerSesionesMaps/" + id_Sesion;

	var client = new HttpClient(true);
	client.get(url, function(response) {
		geojson = JSON.parse(response);
		map.data.addGeoJson(geojson);
		console.log(response);
	});

	map.data.addListener('click', function(event) {
		var description = event.feature.getProperty("description");
			var title = event.feature.getProperty("title");
			var url = event.feature.getProperty("url");
			var link = event.feature.getProperty("link");
			infowindow.setContent("<div style='width:150px; text-align: center;'><strong>"+title+"</strong><br>"+description+"<br><a href='"+url+"'>"+link+"</a></div>");
			infowindow.setPosition(event.latLng);
			infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
			infowindow.open(map);
	});

	}