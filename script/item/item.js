import fetchData from '../util/fetchData.js';
import endpoints from '../util/endpoints.js';
const { photosEndpoint } = endpoints;

async function item() {
	const urlParams = new URLSearchParams(window.location.search);
	const photoId = urlParams.get('id');
	const [item] = await fetchData(
		photosEndpoint + `?_expand=album&id=${photoId}`
	);
	const { albumId, description, url } = item;
	const albumLink = document.querySelector('#item-link');
	albumLink.setAttribute('href', `./album.html?id=${albumId}`);
	const itemDescription = document.querySelector('#item-description');
	itemDescription.textContent = description;
	const itemPhoto = document.querySelector('#item-photo');
	itemPhoto.setAttribute('src', url);
}

window.addEventListener('load', item);
