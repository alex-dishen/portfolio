import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getGlowingColor } from 'components/Navbar/helpers';

const useNavbar = () => {
  const [glowingColor, setGlowingColor] = useState('');
  const [animationDelay, setAnimationDelay] = useState(3.4);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const getAnimationDelay = () =>
    setAnimationDelay(location.pathname === '/' ? 3.4 : 0.9);

  const getIsMobile = () =>
    setIsMobile(window.innerWidth < 1050 ? true : false);

  useEffect(() => {
    getGlowingColor(location.pathname, setGlowingColor);
  }, [location.pathname]);

  useEffect(() => {
    getAnimationDelay();
    getIsMobile();
  }, []);

  return { animationDelay, isMobile, glowingColor, location };
};

export default useNavbar;
