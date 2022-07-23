import * as React from 'react';
import { HighlightedGradient as HighlightedGradientWrapper } from './HighlightedGradient.style';

export default function HighlightedGradient(props) {

  return (
    <HighlightedGradientWrapper>{props.children}</HighlightedGradientWrapper>
  );
}
