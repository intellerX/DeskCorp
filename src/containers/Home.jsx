import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/components/Home.scss';
import Image1 from '../assets/static/Image11.jpg'
import Image2 from '../assets/static/Captura.png'
import Image3 from '../assets/static/Captura2.png'

import '../assets/styles/App.scss';

import useInitialState from '../hooks/useInitialState';


const Home = ({ mylist, trends, originals }) => {
	// const initialState = useInitialState(API);
	return (
		<div className = "home">
			
			<h1 className = "title">Desk Corp</h1>
			
			<img className = "image1" id="Image1"   data-type="image"  src={Image1}></img>

			<div>
				<h1 className= "title__2">Misión</h1>
				<h3>Un Futuro sostenible</h3>
				<p className = "par">
					Somos un grupo de emprendedores(as) e ingenieros(as) llenos de talento con una idea innovadora que esperamos que contribuya a tener un futuro mejor. Ofrecemos soluciones inteligentes para empresas de cualquier tamaño y nos llena de orgullo la inigualable dedicación que ponemos en todos nuestros servicios.
					En Desk Corp creemos que el conocimiento y las ventajas tecnológicas adecuados pueden llevar al éxito de las empresas. Siempre buscamos la opinión de nuestros clientes para aprender y evolucionar. Contáctanos hoy mismo para concretar una reunión con uno de nuestros representantes de ventas o para solicitar una demostración.
				</p>
			</div>

			<Categories title='Productos'>
				<Carousel className = "carousel">
					{trends.map((item) => (
						<CarouselItem key={item.id} {...item}  />
					))}
				</Carousel>
			</Categories>

			<img className = "image2" id="Image2"   data-type="image"  src={Image2}></img>

			<img className = "image2" id="Image2"   data-type="image"  src={Image3}></img>


			
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		mylist: state.mylist,
		trends: state.trends,
		originals: state.originals,
	};
};
// export default Home;
// export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);