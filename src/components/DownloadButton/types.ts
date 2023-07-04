import { ReactNode } from 'react';

export type DownloadButtonProps = {
  icon: ReactNode;
  text: string;
  platform: string;
  href: string;
};
