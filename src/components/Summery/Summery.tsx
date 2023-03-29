import { useState } from 'react';
import { SummeryProps } from 'components/Summery/interfaces';
import { Text, SVGHolder } from 'components/Summery/styles';
import { ReactComponent as ChevronUp } from 'assets/ui/chevron-up.svg';
import { ReactComponent as ChevronDown } from 'assets/ui/chevron-down.svg';

function Summery({ summery }: SummeryProps) {
  const [isShowSummery, setIsShowSummery] = useState(false);

  return (
    <>
      <Text isShowSummery={isShowSummery}>{summery}</Text>
      <SVGHolder onClick={() => setIsShowSummery(!isShowSummery)}>
        {isShowSummery ? <ChevronUp /> : <ChevronDown />}
      </SVGHolder>
    </>
  );
}

export default Summery;
