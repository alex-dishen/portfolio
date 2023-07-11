'use client'

import useNavbar from 'src/components/Navbar/useNavbar'
import { pages } from 'src/components/Navbar/constants'
import {
  StyledNavbar,
  StyledLink,
  LinkHolder,
  Overflow,
} from 'src/components/Navbar/styles'

const Navbar = () => {
  const { animationDelay, isMobile, glowingColor, pathName } = useNavbar()

  return (
    <>
      <StyledNavbar delay={animationDelay} isMobile={isMobile}>
        {pages.map(({ path, filledPicture, plainPicture }) => (
          <LinkHolder key={path} glowingColor={glowingColor}>
            <StyledLink
              href={path}
              target={path.includes('http') ? '_blank' : ''}
            >
              {pathName === path ? filledPicture : plainPicture}
            </StyledLink>
          </LinkHolder>
        ))}
      </StyledNavbar>
      <Overflow />
    </>
  )
}

export default Navbar
