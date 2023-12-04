import fetchData from '../util/fetchData.js';
import endpoints from '../util/endpoints.js';
const { highlightsEndpoint } = endpoints;
async function highlights() {
	const highlights = await fetchData(highlightsEndpoint + '/?_expand=album');
	const container = document.querySelector('#highlights');
	for (let highlight of highlights) {
		const {
			album: { id, coverImgUrl },
			description,
		} = highlight;
		const itemHighlight = document.createElement('a');
		itemHighlight.setAttribute('href', `./album.html?id=${id}`);
		itemHighlight.classList.add('carousel-item');
		itemHighlight.innerHTML = `
    <img src="${coverImgUrl}" height="720px" class="d-block w-100 object-fit-cover" alt="Highlight cover">
	  <div class="carousel-caption d-none d-md-block">
	    <p>${description}</p>
	  </div>`;
		container.appendChild(itemHighlight);
	}
	container.firstElementChild.classList.add('active');
	console.log(container.children);
}

export default highlights;
