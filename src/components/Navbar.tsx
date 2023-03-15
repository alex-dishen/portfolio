import { pages, mobile, desktop } from 'components/constants';
import { StyledNavbar, ImageHolder, Overflow } from 'components/styles';
import useNavbar from './useNavbar';

function Navbar() {
  const { glowingColor, location } = useNavbar();

  return (
    <>
      <StyledNavbar
        variants={window.innerWidth <= 850 ? mobile : desktop}
        initial="hidden"
        animate="show"
      >
        {pages.map((page) => (
          <ImageHolder
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
