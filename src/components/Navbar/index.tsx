import { pages } from 'components/Navbar/constants';
import {
  StyledNavbar,
  StyledLink,
  LinkHolder,
  Overflow,
} from 'components/Navbar/styles';
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
          <LinkHolder key={page.path} glowingColor={glowingColor}>
            <StyledLink
              to={page.path}
              target={page.path.includes('http') ? '_blank' : ''}
            >
              {location.pathname === page.path
                ? page.filledPicture
                : page.plainPicture}
            </StyledLink>
          </LinkHolder>
        ))}
      </StyledNavbar>
      <Overflow />
    </>
  );
}

export default Navbar;
