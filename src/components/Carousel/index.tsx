import { memo } from 'react';
import Swipi from 'swipi';
import { CarouselProps } from 'components/Carousel/types';
import {
  CarouselWrapper,
  ImageHolder,
  Image,
  Dot,
  ActiveDot,
} from 'components/Carousel/styles';
import { ReactComponent as ChevronLeft } from 'assets/images/ui/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'assets/images/ui/chevron-right.svg';

const Carousel = ({ pictures, id, isVisible, name }: CarouselProps) => (
  <CarouselWrapper id={id} isVisible={isVisible}>
    <Swipi
      showDots
      loop
      slidesNumber={name === 'Weaponry' ? 3 : 1}
      spaceBetweenSlides={name === 'Weaponry' ? 15 : 0}
      animationSpeed={500}
      dotsAnimation="sliding"
      customDot={<Dot />}
      customActiveDot={<ActiveDot />}
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
