import { StyledNavbar, ImageHolder } from 'components/styles';
import { ReactComponent as Bolt } from 'assets/bolt.svg';
import { ReactComponent as FBolt } from 'assets/bolt-filled.svg';
import { ReactComponent as Home } from 'assets/home.svg';
import { ReactComponent as FHome } from 'assets/home-filled.svg';
import { ReactComponent as Person } from 'assets/person.svg';
import { ReactComponent as FPerson } from 'assets/person-filled.svg';
import { ReactComponent as Mail } from 'assets/mail.svg';
import { ReactComponent as FMail } from 'assets/mail-filled.svg';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Navbar() {
  const location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <StyledNavbar>
      <ImageHolder smooth to="#">
        {location.pathname === '/' && location.hash === '' ? (
          <FHome />
        ) : (
          <Home />
        )}
      </ImageHolder>
      <ImageHolder smooth to="/#projects">
        {location.hash === '#projects' ? <FBolt /> : <Bolt />}
      </ImageHolder>
      <ImageHolder to="/about">
        {location.pathname === '/about' ? <FPerson /> : <Person />}
      </ImageHolder>
      <ImageHolder to="/contact">
        {location.pathname === '/contact' ? <FMail /> : <Mail />}
      </ImageHolder>
    </StyledNavbar>
  );
}

export default Navbar;
