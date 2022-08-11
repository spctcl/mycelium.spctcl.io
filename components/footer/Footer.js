import { Text } from "@nextui-org/react";
import * as React from 'react';
import MushroomMountains from '../illustrations/illustration-mushroom-landscape';
import { Footer as FooterWrapper, FooterIllustrationWrapper } from './Footer.style';
export default function Footer(props) {

  return (
    <FooterWrapper>
      <Text style={{
        alignItems: 'center',
        display: 'flex',
        padding: '12px',
      }}>
        &copy; 2022 Spectacle, Inc.
      </Text>
      <FooterIllustrationWrapper>
        <MushroomMountains style={{ transform: "translateY(20px)" }} />
      </FooterIllustrationWrapper>
    </FooterWrapper >
  );
}
