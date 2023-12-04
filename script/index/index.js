import endpoints from '../util/endpoints.js';
import drawAlbum from './drawAlbum.js';
import mapfn from './map.js';
import fetchData from '../util/fetchData.js';
import highlights from './highlights.js';
const { albumsEndpoint } = endpoints;

async function index() {
	await highlights();
	const map = mapfn();
	const albums = await fetchData(albumsEndpoint);
	for (let album of albums) {
		drawAlbum(album, map);
	}
}

window.addEventListener('load', index);
