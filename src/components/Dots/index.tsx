import { DotsWrapper, Dot } from 'components/Dots/styles';

interface DotsProps {
  isVisible: boolean;
}

function Dots({ isVisible }: DotsProps) {
  return (
    <DotsWrapper isVisible={isVisible}>
      <Dot />
      <Dot />
      <Dot />
    </DotsWrapper>
  );
}

export default Dots;
