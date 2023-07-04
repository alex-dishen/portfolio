import { DownloadButtonProps } from 'components/DownloadButton/types';
import {
  DownloadButtonWrapper,
  Info,
  Platform,
  Text,
} from 'components/DownloadButton/styles';

const DownloadButton = ({
  icon,
  text,
  platform,
  href,
}: DownloadButtonProps) => (
  <DownloadButtonWrapper href={href} target="blank">
    {icon}
    <Info>
      <Text>{text}</Text>
      <Platform>{platform}</Platform>
    </Info>
  </DownloadButtonWrapper>
);

export default DownloadButton;
