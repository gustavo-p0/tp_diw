function map() {
	mapboxgl.accessToken =
		'pk.eyJ1Ijoib2d1c3Rhdm9jb3N0YSIsImEiOiJjbHBxMDEzMmgxMjB6Mm1xZmxsY2FkbXZyIn0._6OzPUkysjPpHEpWyZmD1g';
	const map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v12',
		zoom: 2,
	});

	navigator.geolocation.getCurrentPosition(
		(position) => {
			map.flyTo({
				center: [position.coords.longitude, position.coords.latitude],
			});
		},
		() => {
			alert('Não foi possível identificar a  localização do usuário!');
		}
	);
	return map;
}

export default map;
