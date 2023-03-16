import { ReactNode } from 'react';

export interface IImageHolder {
  glowingColor?: string;
  children: ReactNode;
  to: string;
  target: string;
}
