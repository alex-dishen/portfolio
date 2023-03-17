import { useRef, useState, useEffect } from 'react';
import { PanInfo, useAnimation } from 'framer-motion';
import { ReactComponent as ChevronLeft } from 'assets/ui/chevron-left.svg';
import { ReactComponent as ChevronRight } from 'assets/ui/chevron-right.svg';
import {
  CarouselWrapper,
  LeftButton,
  ImageHolder,
  Image,
  RightButton,
  DotsWrapper,
  Dot,
  ActiveDot,
} from 'components/Carousel/styles';

interface CarouselProps {
  pictures: { id: number; src: string }[];
}

function Carousel({ pictures }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const carouselControls = useAnimation();
  const animateCarousel = () => {
    carouselControls.start({ x: `${-index * 100}%` });
  };

  const setIndexByPosition = (_event: never, info: PanInfo) => {
    const { x } = info.offset;
    const carouselWidth = carousel.current?.clientWidth || 1;
    const initialOffset = index * carouselWidth;
    const newIndex = Math.round((initialOffset + x * -2) / carouselWidth);
    if (newIndex !== index) {
      setIndex(newIndex);
    } else {
      animateCarousel();
    }
  };

  useEffect(() => {
    if (!pictures) return;

    animateCarousel();
    if (index >= pictures.length) return setIndex(0);

    if (index < 0) return setIndex(pictures.length - 1);
  }, [index]);

  return (
    <CarouselWrapper
      ref={carousel}
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.8, delay: 0.6, ease: 'easeOut' },
      }}
      viewport={{ once: true }}
    >
      <LeftButton
        onClick={() => {
          setIndex(index - 1);
        }}
      >
        <ChevronLeft />
      </LeftButton>
      <ImageHolder
        drag="x"
        dragMomentum={false}
        onMouseDown={(e) => e.preventDefault()}
        onDragEnd={setIndexByPosition}
        initial={{ x: 0 }}
        animate={carouselControls}
        transition={{ duration: 0.6 }}
      >
        {pictures &&
          pictures.map((picture) => (
            <Image key={picture.id} src={picture.src} />
          ))}
      </ImageHolder>
      <DotsWrapper>
        {pictures &&
          pictures.map((picture, i) => (
            <Dot
              key={picture.id}
              initial={false}
              animate={{ scale: +(index !== i) }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                setIndex(i);
              }}
            />
          ))}
        <ActiveDot
          initial={false}
          transition={{ duration: 0.35 }}
          animate={{ x: index * 22 }}
        />
      </DotsWrapper>
      <RightButton
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        <ChevronRight />
      </RightButton>
    </CarouselWrapper>
  );
}

export default Carousel;
