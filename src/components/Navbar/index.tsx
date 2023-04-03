import uniqid from 'uniqid';
import { pages } from 'components/Navbar/constants';
import { StyledNavbar, ImageHolder, Overflow } from 'components/Navbar/styles';
import useNavbar from 'components/Navbar/useNavbar';

function Navbar() {
  const { glowingColor, location } = useNavbar();

  return (
    <>
      <StyledNavbar
        delay={location.pathname === '/' ? 3.4 : 0.9}
        isMobile={window.innerWidth <= 850 ? true : false}
      >
        {pages.map((page) => (
          <ImageHolder
            key={uniqid()}
            to={page.path}
            glowingColor={glowingColor}
            target={page.path.includes('http') ? '_blank' : ''}
          >
            {location.pathname === page.path
              ? page.filledPicture
              : page.plainPicture}
          </ImageHolder>
        ))}
      </StyledNavbar>
      <Overflow />
    </>
  );
}

export default Navbar;
