import styled from '@emotion/styled'
import { fontSizes, space, viewports } from '../../styles/theme/settings'


export const Nav = styled.nav`
  display: flex;
  align-conent: center;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  position: fixed;
  width: 100%;
  z-index: 1;
  height: 80px;
  background-color: white;
  padding: 0 ${space.sm};
  top: ${(props) => props.offsetTopNav};

  @media(${viewports.minXs}) {
    padding: 0 ${space.xl};
  }
  `


export const NavLogo = styled.div`
font - size: ${fontSizes.xl};
`
export const NavLinks = styled.div`
display: flex;
.nav-links__link div { width: 60px; margin-left: 12px; }
.nav-links__link:last-of-type div   { margin-left: 8px;}

// @media(${viewports.minXs}) {
//   display: flex;
//   .nav-links__link div { width: 60px; margin-left: 12px; }
// }
`

export const NavLink = styled.div`
margin: ${space['4']}
`

export const NavHamburger = styled.div`
display: none;
width: 60px;
height: 30px;
position: relative;

  : after, :before {
  content: ' ';
  position: absolute;
  left: 0;
  width: 100 %;
  height: 4px;
  border - radius: 2px;
  background - color: black;
}

  :before {
  top: 0;
}
  :after {
  bottom: 0;
}

@media(${viewports.minXs}) {
  display: none;
}

  ${({ mobileOpen }) =>
    mobileOpen &&
    `
    :before {
      transform: rotate(45deg);
      top: 50%;
    }
    :after {
      transform: rotate(-45deg);
      top: 50%;
      bottom: unset;
    }    
  `}
`

