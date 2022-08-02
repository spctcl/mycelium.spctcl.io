import { Typography } from '@mui/material';
import * as React from 'react';
import MushroomMountains from '../illustrations/illustration-mushroom-landscape';
import { Footer as FooterWrapper, FooterIllustrationWrapper } from './Footer.style';
export default function Footer(props) {

  return (
    <FooterWrapper>
      <Typography variant="test">&copy; 2022 Spectacle, Inc.</Typography>
      <FooterIllustrationWrapper>
        <MushroomMountains style={{ transform: "translateY(20px)" }} />
      </FooterIllustrationWrapper>
    </FooterWrapper>
  );
}
