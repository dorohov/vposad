
//2gis map - удалить если не используется
var twoGis_map_container = 'map-2gis';
var twoGis_cont = $('#' + twoGis_map_container);  
var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
var CMS__TPL_PATH = '';  
if(twoGis_cont.length) { 
	var twoGis_map_data = JSON.parse(twoGis_cont.attr('data-map') || '{}');
	var map;
	var mapCoord = twoGis_map_data.center;
	var mapZoom = twoGis_map_data.zoom;
	var placeholderCoord = twoGis_map_data.placemarks.coord;
	var iconUrl = CMS__TPL_PATH + '/img/svg/icon-map.svg';
	var iconRetinaUrl = CMS__TPL_PATH + '/img/svg/icon-map.svg';
	var iconSize = [60, 84];
	var iconAnchor = [30, 84]; 

	DG.then(function () {
		map = DG.map(twoGis_map_container, {
			center: mapCoord,
			zoom: mapZoom,
			scrollWheelZoom: false,
			fullscreenControl: false
		});
		var myIcon = DG.icon({
			iconUrl: iconUrl,
			iconRetinaUrl: iconRetinaUrl,
			iconSize: iconSize,
			iconAnchor: iconAnchor,
			popupAnchor: [0, 0]
		});
		if(twoGis_map_data.placemarks.length) {
			for(var i = 0; i < twoGis_map_data.placemarks.length; i++) {
				DG.marker(twoGis_map_data.placemarks[i].coord, {icon: myIcon}).addTo(map).bindPopup(twoGis_map_data.placemarks[i].title);
			}
		}
	});
}