import { DotsWrapper, Dot } from 'components/Dots/styles';
import { DotsProps } from 'components/Dots/types';

const Dots = ({ isVisible }: DotsProps) => (
  <DotsWrapper isVisible={isVisible}>
    <Dot />
    <Dot />
    <Dot />
  </DotsWrapper>
);

export default Dots;
