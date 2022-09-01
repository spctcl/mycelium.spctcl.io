import styled from '@emotion/styled'
import { viewports } from '../../styles/theme/settings'


export const IntroductionImageWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
align-items: baseline;
margin-top: 20px;
margin-bottom: 20px;
overflow: visible;

@media (${viewports.minXs}) {
  margin-top: 53px;
  margin-bottom: 70px;
}

  img  {
    width: 200px;
    filter: drop-shadow(3px 3px 5px #222);
    @media (${viewports.minMd}) {
      margin-top: 0;
      margin-right: 54px;
      }
  }
`
