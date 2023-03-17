import { DotsWrapper, Dot } from 'components/Dots/styles';
import { generalAnimation } from 'pages/Projects/constants';

function Dots() {
  return (
    <DotsWrapper
      variants={generalAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Dot />
      <Dot />
      <Dot />
    </DotsWrapper>
  );
}

export default Dots;
