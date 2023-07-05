import { memo } from 'react';
import Swipi from 'swipi';
import { CarouselProps } from 'components/Carousel/types';
import {
  CarouselWrapper,
  ImageHolder,
  Image,
} from 'components/Carousel/styles';
import { ReactComponent as ChevronLeft } from 'assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg';

const Carousel = ({ pictures, id, isVisible, name }: CarouselProps) => (
  <CarouselWrapper id={id} isVisible={isVisible}>
    <Swipi
      loop
      slidesNumber={name === 'Weaponry' ? 3 : 1}
      spaceBetweenSlides={name === 'Weaponry' ? 15 : 0}
      animationSpeed={500}
      prevButton={<ChevronLeft />}
      nextButton={<ChevronRight />}
    >
      {pictures.map((picture) => (
        <ImageHolder key={picture.id}>
          <Image src={picture.src} alt={picture.alt} />
        </ImageHolder>
      ))}
    </Swipi>
  </CarouselWrapper>
);

export default memo(Carousel);
