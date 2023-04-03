import Slider from 'infinite-image-slider';
import {
  CarouselWrapper,
  ImageHolder,
  Image,
  Dot,
  ActiveDot,
} from 'components/Carousel/styles';
import { ReactComponent as ChevronLeft } from 'assets/ui/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'assets/ui/chevron-right.svg';

interface CarouselProps {
  pictures: { id: string; src: string }[];
  id: string;
  isVisible: boolean;
}

function Carousel({ pictures, id, isVisible }: CarouselProps) {
  return (
    <CarouselWrapper id={id} isVisible={isVisible}>
      <Slider
        showDots
        config={[{ slidesNumber: 1, maxWidth: 2000 }]}
        prevButton={<ChevronLeft />}
        nextButton={<ChevronRight />}
        customDot={<Dot />}
        customActiveDot={<ActiveDot />}
      >
        {pictures.map((picture) => (
          <ImageHolder key={picture.id}>
            <Image src={picture.src} />
          </ImageHolder>
        ))}
      </Slider>
    </CarouselWrapper>
  );
}

export default Carousel;
