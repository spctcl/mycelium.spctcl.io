import styled from '@emotion/styled'
import { viewports } from '../../styles/theme/settings'


export const IntroductionImageWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: baseline;
margin-bottom: 54px;

  img  {
    width: 200px;
    
    @media (${viewports.minLg}) {
      width: 500px;
    }
  }

`
