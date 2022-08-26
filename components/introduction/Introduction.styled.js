import styled from '@emotion/styled'
import { viewports } from '../../styles/theme/settings'


export const IntroductionImageWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
align-items: baseline;

  img  {
    width: 200px;
    
    @media (${viewports.minLg}) {
      width: 500px;
    }
  }
`
