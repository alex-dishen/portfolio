import { glowingColors } from 'styles/palette';

export const getGlowingColor = (
  location: string,
  setGlowingColor: (a: string) => void
) => {
  if (location === '/') return setGlowingColor(glowingColors.blue);

  if (location === '/projects') return setGlowingColor(glowingColors.orange);

  if (location === '/about') return setGlowingColor(glowingColors.red);

  if (location === '/contact') return setGlowingColor(glowingColors.purple);
};
