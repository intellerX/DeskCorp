import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import IconoBioSeC1 from '../src/assets/static/ico.png'

// Redux
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';

const initialState = {
	user: {},
	playing: {},
	mylist: [],
	trends: [
		{
			id: 2,
			slug: 'prod-2',
			title: 'BioSeC19',
			type: 'Windows',
			language: 'Español',
			year: 2020,
			contentRating: '1/07/2020',
			duration: 164,
			cover: '../src/assets/static/ico.png',
			description: 'Protocolo de Bio Seguridad Empresarial',
			source: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1',
		},
		{
			id: 3,
			slug: 'prod-3',
			title: 'BioSeC Registros',
			type: 'Windows',
			language: 'Español',
			year: 2020,
			contentRating: '1/07/2020',
			duration: 137,
			cover: '../src/assets/static/icoReg.png',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1',
		},
		{
			id: 4,
			slug: 'prod-4',
			title: 'BioSeC Restaurantes',
			type: 'Windows',
			language: 'Español',
			year: 2020,
			contentRating: '1/07/2020',
			duration: 163,
			cover: '../src/assets/static/icoRestaurantes.png',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
		{
			id: 5,
			slug: 'prod-5',
			title: 'BioSeC19 Salvador',
			type: 'Windows',
			language: 'Español',
			year: 2020,
			contentRating: '1/07/2020',
			duration: 194,
			cover: '../src/assets/static/ico.png',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
		{
			id: 6,
			slug: 'prod-6',
			title: 'BioSeC Movil',
			type: 'Android',
			language: 'Español',
			year: 2020,
			contentRating: '1/07/2020',
			duration: 124,
			cover: '../src/assets/static/icoMovil.png',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
		{
			id: 7,
			slug: 'prod-7',
			title: 'The InBetween',
			type: 'Drama',
			language: 'Español',
			year: 2020,
			contentRating: '1/07/2020',
			duration: 179,
			cover: '../src/assets/static/ico.png',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
	],
	originals: [
		{
			id: 8,
			slug: 'prod-8',
			title: 'Stargate Atlantis',
			type: 'Action',
			language: 'Español',
			year: 2020,
			contentRating: '16+',
			duration: 148,
			cover: 'http://dummyimage.com/800x600.png/306880/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
		{
			id: 9,
			slug: 'prod-9',
			title: 'Alien Highway',
			type: 'Action',
			language: 'Español',
			year: 2020,
			contentRating: '16+',
			duration: 128,
			cover: 'http://dummyimage.com/800x600.png/604180/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
		{
			id: 10,
			slug: 'prod-10',
			title: 'Elementary',
			type: 'Animation',
			language: 'Español',
			year: 2011,
			contentRating: '16+',
			duration: 346,
			cover: 'http://dummyimage.com/800x600.png/FF91BA/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
		{
			id: 11,
			slug: 'prod-11',
			title: 'Strange Angel',
			type: 'War',
			language: 'Español',
			year: 2015,
			contentRating: '16+',
			duration: 226,
			cover: 'http://dummyimage.com/800x600.png/45807C/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
		{
			id: 12,
			slug: 'prod-12',
			title: 'Private Eyes',
			type: 'Comedy',
			language: 'Español',
			year: 2018,
			contentRating: '16+',
			duration: 190,
			cover: 'http://dummyimage.com/800x600.png/577380/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
		{
			id: 13,
			slug: 'prod-13',
			title: 'NCIS: Los Angeles',
			type: 'Drama',
			language: 'Español',
			year: 2010,
			contentRating: '16+',
			duration: 160,
			cover: 'http://dummyimage.com/800x600.png/5472FF/ffffff',
			description: 'Vestibulum ac est lacinia nisi venenatis tristique',
			source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
		},
	],
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);