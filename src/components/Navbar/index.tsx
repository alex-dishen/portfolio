import useNavbar from 'components/Navbar/useNavbar';
import { pages } from 'components/Navbar/constants';
import {
  StyledNavbar,
  StyledLink,
  LinkHolder,
  Overflow,
} from 'components/Navbar/styles';

const Navbar = () => {
  const { animationDelay, isMobile, glowingColor, location } = useNavbar();

  return (
    <>
      <StyledNavbar delay={animationDelay} isMobile={isMobile}>
        {pages.map(({ path, filledPicture, plainPicture }) => (
          <LinkHolder key={path} glowingColor={glowingColor}>
            <StyledLink
              to={path}
              target={path.includes('http') ? '_blank' : ''}
            >
              {location.pathname === path ? filledPicture : plainPicture}
            </StyledLink>
          </LinkHolder>
        ))}
      </StyledNavbar>
      <Overflow />
    </>
  );
};

export default Navbar;
