import React from 'react';
import '../assets/styles/components/Services.scss';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Services = ({ trends }) => {
  return (
    <div className='Services'>

      <Categories title='Productos'>
        <Carousel className='carousel'>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <iframe
        title='BioSeC19'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/F4ovuRFURiU?rel=0;autoplay=1'
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />

      <Categories title='Productos'>
        <Carousel className='carousel'>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

    </div>

  );
};
const mapStateToProps = (state) => {
  return {
    trends: state.trends,
  };
};
export default connect(mapStateToProps, null)(Services);
