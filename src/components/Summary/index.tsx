import { useState } from 'react';
import { SummaryProps } from 'components/Summary/types';
import { Text, SVGHolder } from 'components/Summary/styles';
import { ReactComponent as ChevronUp } from 'assets/images/ui/chevron-up.svg';
import { ReactComponent as ChevronDown } from 'assets/images/ui/chevron-down.svg';

const Summary = ({ summary }: SummaryProps) => {
  const [isShowSummary, setIsShowSummary] = useState(false);

  return (
    <>
      <Text isShowSummary={isShowSummary}>{summary}</Text>
      <SVGHolder onClick={() => setIsShowSummary(!isShowSummary)}>
        {isShowSummary ? <ChevronUp /> : <ChevronDown />}
      </SVGHolder>
    </>
  );
};

export default Summary;
