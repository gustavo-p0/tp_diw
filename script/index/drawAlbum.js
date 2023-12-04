function drawAlbum(album, map) {
	const { id, title, description, coverImgUrl, coordinates } = album;
	const target = document.querySelector('#albums-container');
	const element = document.createElement('div');
	element.classList.add('col');
	element.innerHTML = `
			<div class='card h-100'>
				<img
					src='${coverImgUrl}'
					class='card-img-top object-fit-cover'
					alt='${title}'
					height='200px'
				/>
				<div class='card-body'>
					<h3 class='card-title'>${title}</h3>
					<p class='card-text'>
						${description}
					</p>
				</div>
				<a href='./album.html?id=${id}' class='btn btn-outline-primary  m-4'>
					View
				</a>
			</div>`;

	let popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
		`<h2><a href='./album.html?id=${id}' target="_blank">${title}</a></h2><br><p>${description}</p>`
	);
	const [lat, lng] = coordinates;
	new mapboxgl.Marker().setLngLat([lng, lat]).setPopup(popup).addTo(map);
	target.appendChild(element);
}

export default drawAlbum;
