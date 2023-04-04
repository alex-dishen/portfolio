export type CarouselWrapperTypes = {
  isVisible: boolean;
};

export type CarouselProps = {
  pictures: { id: string; src: string }[];
  id: string;
  isVisible: boolean;
};
