import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FC } from 'react';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import style from './Splide.module.css';
import { useSplide } from '../../hooks/useSplide';
import { Link } from 'react-router-dom';
import useFetchPlants from '../../hooks/API/useFetchPlants';
import Label from '../Label/Label';
import { CarouselProps } from './Splide.types';

const ImageCarousel: FC<CarouselProps> = ({ type }) => {
  const numberOfSlides = useSplide();
  const { data: plants, loading, error } = useFetchPlants();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  const plantsInSale = plants?.filter((plant) => plant.isInSale) || [];
  const bestSelling = plants?.filter((plant) => plant.price < 50) || [];
  const carouselContent = type === 'plantsInSale' ? plantsInSale : bestSelling;

  if (!carouselContent || carouselContent.length === 0) {
    return <p>No plants available for the selected category.</p>;
  }

  return (
    <Splide
      options={{
        type: 'loop',
        perPage: numberOfSlides,
        drag: 'free',
        pagination: false,
        arrows: false,
        autoScroll: {
          speed: 0.5,
        },
      }}
      extensions={{ AutoScroll }}
      aria-label="Plant Carousel"
    >
      {carouselContent.map((plant) => (
        <SplideSlide key={plant.id}>
          <Link to={`/plants/${plant.id}`} className={style.container}>
            <div className={style.splideBody}>
              <div className={style.imgContainer}>
                <img src={plant.imgUrl} alt={plant.name} />
              </div>
              <div>
                <p>{plant.name}</p>
                <small>${plant.price}</small>
              </div>
              <div className={style.label}>
                <Label text={plant.label} />
                <Label text={plant.plantType || ''} />
              </div>
            </div>
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ImageCarousel;
