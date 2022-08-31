import EmailIcon from '@mui/icons-material/Email';
import { Link, Text } from "@nextui-org/react";

import * as React from 'react';
import MushroomMountains from '../illustrations/illustration-mushroom-landscape';
import { Footer as FooterWrapper, FooterIllustrationWrapper } from './Footer.style';
export default function Footer(props) {

  return (
    <FooterWrapper>
      <Text style={{
        alignItems: 'center',
        display: 'flex',
      }}>
        &copy; 2022 Spectacle, Inc.
      </Text>
      <Link
        target="_blank"
        className="nav-links__link"
        href="mailto:info@spctcl.io?subject=Hey Mycelium!"
        style={{
          color: 'unset',
          textDecoration: 'underline',
          backgroundColor: 'unset',
        }}
      >
        <span className='footer-mail-info'>info@spctcl.io</span>
        <EmailIcon sx={{ alignSelf: 'center' }} />
      </Link>

      <FooterIllustrationWrapper >
        <MushroomMountains style={{
          transform: "translateY(20px)", width: "100%", height: "auto"
        }} />
      </FooterIllustrationWrapper>
    </FooterWrapper >
  );
}
