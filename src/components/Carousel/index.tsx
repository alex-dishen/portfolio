import { memo } from 'react';
import Slider from 'swipi';
import { CarouselProps } from 'components/Carousel/types';
import {
  CarouselWrapper,
  ImageHolder,
  Image,
} from 'components/Carousel/styles';
import { ReactComponent as ChevronLeft } from 'assets/images/ui/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'assets/images/ui/chevron-right.svg';

const Carousel = ({ pictures, id, isVisible }: CarouselProps) => (
  <CarouselWrapper id={id} isVisible={isVisible}>
    <Slider
      showDots
      config={[{ slidesNumber: 1, maxWidth: 2000 }]}
      prevButton={<ChevronLeft />}
      nextButton={<ChevronRight />}
      activeDotColor="rgba(255, 145, 1, 1)"
    >
      {pictures.map((picture) => (
        <ImageHolder key={picture.id}>
          <Image src={picture.src} />
        </ImageHolder>
      ))}
    </Slider>
  </CarouselWrapper>
);

export default memo(Carousel);
