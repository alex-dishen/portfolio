import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledNavbar, ImageHolder } from 'components/styles';
import { glowingColors } from 'styles/palette';
import { ReactComponent as Bolt } from 'assets/ui/bolt.svg';
import { ReactComponent as FBolt } from 'assets/ui/bolt-filled.svg';
import { ReactComponent as Explore } from 'assets/ui/explore.svg';
import { ReactComponent as FExplore } from 'assets/ui/explore-filled.svg';
import { ReactComponent as Person } from 'assets/ui/person.svg';
import { ReactComponent as FPerson } from 'assets/ui/person-filled.svg';
import { ReactComponent as Mail } from 'assets/ui/mail.svg';
import { ReactComponent as FMail } from 'assets/ui/mail-filled.svg';

function Navbar() {
  const [glowingColor, setGlowingColor] = useState('');
  const location = useLocation();

  const getGlowingColor = () => {
    if (location.pathname === '/') return setGlowingColor(glowingColors.blue);

    if (location.pathname === '/about')
      return setGlowingColor(glowingColors.red);

    if (location.pathname === '/contact')
      return setGlowingColor(glowingColors.purple);
  };

  useEffect(() => {
    getGlowingColor();
  }, [location.pathname]);

  return (
    <StyledNavbar>
      <ImageHolder to="/" glowingColor={glowingColor}>
        {location.pathname === '/' ? <FExplore /> : <Explore />}
      </ImageHolder>
      <ImageHolder glowingColor={glowingColor} to="/projects">
        {location.pathname === '/projects' ? <FBolt /> : <Bolt />}
      </ImageHolder>
      <ImageHolder glowingColor={glowingColor} to="/about">
        {location.pathname === '/about' ? <FPerson /> : <Person />}
      </ImageHolder>
      <ImageHolder to="/contact" glowingColor={glowingColor}>
        {location.pathname === '/contact' ? <FMail /> : <Mail />}
      </ImageHolder>
    </StyledNavbar>
  );
}

export default Navbar;
