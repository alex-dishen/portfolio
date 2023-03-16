import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getGlowingColor } from 'components/Navbar/helpers';

const useNavbar = () => {
  const [glowingColor, setGlowingColor] = useState('');
  const location = useLocation();

  useEffect(() => {
    getGlowingColor(location.pathname, setGlowingColor);
  }, [location.pathname]);

  return { glowingColor, location };
};

export default useNavbar;
