import { useState } from 'react';
import { SummeryProps } from 'components/Summery/types';
import { Text, SVGHolder } from 'components/Summery/styles';
import { ReactComponent as ChevronUp } from 'assets/images/ui/chevron-up.svg';
import { ReactComponent as ChevronDown } from 'assets/images/ui/chevron-down.svg';

const Summery = ({ summery }: SummeryProps) => {
  const [isShowSummery, setIsShowSummery] = useState(false);

  return (
    <>
      <Text isShowSummery={isShowSummery}>{summery}</Text>
      <SVGHolder onClick={() => setIsShowSummery(!isShowSummery)}>
        {isShowSummery ? <ChevronUp /> : <ChevronDown />}
      </SVGHolder>
    </>
  );
};

export default Summery;
