import React from 'react';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/components/Home.scss';
import Image1 from '../assets/static/Image11.jpg';
import Image2 from '../assets/static/Captura.jpg';
import Image3 from '../assets/static/Captura2.jpg';

import LogoScaler from '../assets/static/logoSkaler.png';
import LogoBell from '../assets/static/logoBell.png';
import LogoC from '../assets/static/logoCys.png';


import '../assets/styles/App.scss';

const Home = ({ trends }) => {
  // const initialState = useInitialState(API);
  return (
    <div className='home'>

      <h1 className='title'>Desk Corp</h1>

      <img className='image1' id='Image1' data-type='image' src={Image1} alt='Imagen Principal' />

      <div>
        <h1 className='title__2'>Misión</h1>
        <h3>Un Futuro Sostenible</h3>
        <p className='par'>
          Desarrollar soluciones prácticas digitales a la medida, para gestionar procesos criticos de la compañía, con metodologias y estandares internacionales, que soporten la rentabilidad y sostenibilidad de los negocios.
        </p>
      </div>

      <Categories title='Productos'>
        <Carousel className='carousel'>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <div className='panel__info'>
        <div className='panel1'>
          <h2 className='title__2'>¿Qué ofrecemos?</h2>
          <p>
            Ofrecer soluciones para las empresas con diferentes programas (Software) que les ayuden a gestionar sus procesos, siendo eficacez y eficientes en la forma de adminsitrarlos, permitiendoles tomar mejores decisiones para ser rentables y sotenibles.

          </p>

        </div>

        <div className='panel2'>
          <img className='panel2__image2' id='Image2' data-type='image' src={Image2} alt='Logo' />
        </div>

      </div>

      <div className='panel__info'>
        <div className='panel1'>
          <h2 className='title__2'>Nuestra tecnología</h2>
          <p>
            En Desk Corp creemos que nuestras soluciones pronto se volverán uno de los segmentos más grandes de la industria. Acabamos de comenzar pero ya sabemos que cada producto que desarrollamos requiere de capacidades, dedicación y una actitud audaz que nos hemos ganado a pulso. Sigue leyendo y descubre todo lo que hay que saber detrás de la tecnología inteligente detrás de nuestro(a) Startup de software.
          </p>

        </div>

        <div className='panel2'>
          <img className='panel2__image2' id='Image2' data-type='image' src={Image3} alt='img2' />
        </div>
      </div>

      <h2>Aliados tecnológicos</h2>
      <div className='panel__aliados'>
        <img src={LogoScaler} alt='Logo Skaler' className='panel__aliados--logo' />
        <img src={LogoBell} alt='Logo Bell' className='panel__aliados--logo' />
        <img src={LogoC} alt='Logo Cys' className='panel__aliados--logo' />
      </div>

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
