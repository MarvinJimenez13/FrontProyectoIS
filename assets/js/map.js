var map;
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}
function initMap() {
	var infowindow = new google.maps.InfoWindow();
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: {lat: 19.357, lng: -99.182},
	});
	//var geojson;
	//var client = new HttpClient();
	//client.get('http://localhost:81/shimazu/assets/lib/services/projectlocationservice.php', function(response) {
		//geojson = JSON.parse(response);
	//});
	
	//map.data.addGeoJson(geojson);
	map.data.loadGeoJson('assets/lib/model/coordTest.json');
	map.data.setStyle( function() { return { icon: { path: google.maps.SymbolPath.CIRCLE, scale: 8, strokeColor: '#FF149B'} }; });
	
	map.data.addListener('mouseover', function(event) {
			var description = event.feature.getProperty("description");
			var title = event.feature.getProperty("title");
			var url = event.feature.getProperty("url");
			var link = event.feature.getProperty("link");
			infowindow.setContent("<div style='width:150px; text-align: center;'><strong>"+title+"</strong><br>"+description+"<br><a href='"+url+"'>"+link+"</a></div>");
			infowindow.setPosition(event.latLng);
			infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
			infowindow.open(map);
	});
	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center); 
	});
}

function moveToCenter() {
		var x = document.getElementById("quarter");
		setCenter(x.selectedIndex);
}

function setCenter(id) {
	var del = [
		{id: 0, name: 'Alvaro Obregón', lng: -99.195, lat: 19.389},
		{id: 1, name: 'Azcapotzalco', lng: -99.184, lat: 19.484},
		{id: 2, name: 'Benito Juárez', lng: -99.157, lat: 19.37},
		{id: 3, name: 'Coyoacán', lng: -99.162, lat: 19.349},
		{id: 4, name: 'Cuajimalpa de Morelos', lng: -99.3, lat: 19.356},
		{id: 5, name: 'Cuauhtémoc', lng: -99.151, lat: 19.442},
		{id: 6, name: 'Gustavo A. Madero', lng: -99.113, lat: 19.483},
		{id: 7, name: 'Iztacalco', lng: -99.095, lat: 19.395},
		{id: 8, name: 'Iztapalapa', lng: -99.093, lat: 19.359},
		{id: 9, name: 'Magdalena Contreras', lng: -99.241, lat: 19.304},
		{id: 10, name: 'Miguel Hidalgo', lng: -99.189, lat: 19.407},
		{id: 11, name: 'Milpa Alta', lng: -99.023, lat: 19.191},
		{id: 12, name: 'Tláhuac', lng: -99.004, lat: 19.27},
		{id: 13, name: 'Tlalpan', lng: -99.167, lat: 19.288},
		{id: 14, name: 'Venustiano Carranza', lng: -99.112, lat: 19.418},
		{id: 15, name: 'Xochimilco', lng: -99.104, lat: 19.263},
	];
	map.setCenter({lng:del[id].lng, lat:del[id].lat});
}

