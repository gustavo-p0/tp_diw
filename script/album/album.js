import fetchData from '../util/fetchData.js';
import endpoints from '../util/endpoints.js';
const { albumsEndpoint, photosEndpoint, highlightsEndpoint } = endpoints;

async function album() {
	const urlParams = new URLSearchParams(window.location.search);
	const albumId = urlParams.get('id');
	const [album] = await fetchData(albumsEndpoint + `/?id=${albumId}`);
	const albumTitle = document.querySelector('#album-title');
	albumTitle.textContent = album.title;
	const albumDescription = document.querySelector('#album-description');
	albumDescription.textContent = album.description;
	const albumImage = document.querySelector('#album-image');
	albumImage.setAttribute('src', album.coverImgUrl);
	const albumRegister = document.querySelector('#album-register');
	albumRegister.textContent = album.data;
	const albumLocation = document.querySelector('#album-coordinates');
	albumLocation.textContent = album.coordinates;
	const photos = await fetchData(photosEndpoint + `?albumId=${albumId}`);
	const photosContainer = document.querySelector('#photos-container');
	for (let photo of photos) {
		const element = document.createElement('div');
		element.classList.add('col-sm-6', 'col-lg-4', 'mb-4');
		const { id, url, description } = photo;
		element.innerHTML = `
      <div class="card">
        <a href="./item.html?id=${id}">
          <img src="${url}" alt="Album photo" width="100%" height="200"
                  class="object-fit-cover">
        </a>
        <div class="card-body">
          <p class="card-text">${description}</p>
        </div>
      </div>
    `;
		photosContainer.appendChild(element);
	}

	const highlightButton = document.querySelector('#highlight-button');
	highlightButton.addEventListener('click', async (e) => {
		e.stopPropagation();
		alert('Adicionado aos destaques');
		await fetch(highlightsEndpoint, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: +albumId,
				albumId: album.id,
				description: album.description,
			}),
		});
	});
}

window.addEventListener('load', album);
