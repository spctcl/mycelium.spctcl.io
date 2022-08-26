import styled from '@emotion/styled'
import { viewports } from '../../styles/theme/settings'

export const Footer = styled.footer`
  color: white;
  position: relative;
  text-align: left;
  border-top: 1px solid white;
  background-color: #5137d485;
  line-height: 45px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    margin-left: 40px;
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
  margin-bottom: 53px;


  // @media (${viewports.minXl}){
    svg {
      width: 100%;
      height: auto;
    }
  // }
`
