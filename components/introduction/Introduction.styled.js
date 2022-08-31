import styled from '@emotion/styled'
import { viewports } from '../../styles/theme/settings'


export const IntroductionImageWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
align-items: baseline;
margin-top: 53px;

@media (${viewports.minXs}) {
  margin-bottom: 70px;
}

  img  {
    width: 200px;
    
    @media (${viewports.minMd}) {
      margin-top: 0;
      margin-right: 54px;
      }
  }
`
