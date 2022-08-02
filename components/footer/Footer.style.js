import styled from '@emotion/styled'
import { space } from '../../styles/theme/settings'

export const Footer = styled.footer`
  color: white;
  // position: relative;
  // max-width: 1200px;
  margin-top: ${space[10]};
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

  `

export const FooterIllustrationWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`
