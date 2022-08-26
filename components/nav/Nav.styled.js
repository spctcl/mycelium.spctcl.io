import styled from '@emotion/styled'
import { fontSizes, space, viewports } from '../../styles/theme/settings'


export const NavWrapper = styled.div`
  height: 162px;

  @media(${viewports.minXxs}) {
    height: 162px;
  }
  
  @media(${viewports.minXs}) {
    height: 80px;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  top: 0px;
  position: ${(props) => props.offsetTopNav === '0px' ? 'fixed' : 'static'};
  width: 100%;
  z-index: 1;
  background-color: white;
  padding: 0 ${space.sm};
  top: ${(props) => props.offsetTopNav};
  
  @media(${viewports.minXs}) {
    padding: 0 ${space.xl};
    flex-direction: row;
    height: 80px;
    align-conent: center;
    justify-content: space-between;
    align-items: center;
  }
  `

export const NavLogo = styled.div`
font - size: ${fontSizes.xl};
`
export const NavLinks = styled.div`
display: flex;
.nav-links__link div {
   width: 48px;
   margin-right: 14px; 
}

@media(${viewports.minXxs}) {
  display: flex;
  .nav-links__link div { 
  }
}

@media(${viewports.minXs}) {
  display: flex;
  .nav-links__link div { 
    margin-right: 0px; 
    margin-left: 14px; 
  }
}
`

export const NavLink = styled.div`
margin: ${space['4']}
`

export const NavHamburger = styled.div`
display: none;
width: 48px;
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

