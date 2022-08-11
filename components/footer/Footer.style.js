import styled from '@emotion/styled'
import { viewports } from '../../styles/theme/settings'

export const Footer = styled.footer`
  color: white;
  // position: relative;
  // max-width: 1200px;
  text-align: left;
  border-top: 1px solid white;
  background-color: #5137d485;
  line-height: 45px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  
  span {
    margin-left: 40px;
  }

  @media (${viewports.minSm}){
    position: absolute;
  }
  `

export const FooterIllustrationWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`
