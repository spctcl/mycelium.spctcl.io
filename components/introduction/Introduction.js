import { Card, Container, Image, Text } from "@nextui-org/react";
import { useRouter } from 'next/router';
import { cssTextHeadlineH1, cssTextHeadlineHighlight } from '../../styles';
import { createInternalLink } from '../../utils';
import { IntroductionImageWrapper } from './Introduction.styled';
export default function Introduction(props) {
  const router = useRouter()
  return (
    <Container className="introduction-container">
      <IntroductionImageWrapper>
        <Image
          className={'homepage-mushroom-7'}
          src={createInternalLink("img/mycelium_mushroom_7.png", router.basePath)}
          alt="a mushroom"
        />
        <Image
          className={'homepage-mushroom-8'}
          src={createInternalLink("img/mycelium_mushroom_8.png", router.basePath)}
          alt="a mushroom"
        />
      </IntroductionImageWrapper>
      <Card css={{ $$cardColor: '$brandPrimary', width: 'auto', overflow: 'visible' }} >
        <Card.Body css={{ paddingTop: 0, paddingBottom: 0, overflow: "visible" }}>
          <Text
            // className="introduction__text"
            css={{
              ...cssTextHeadlineH1
            }}>
            Open,
          </Text>
          <Text
            // className="introduction__text introduction__text--highlighted" 
            color="#4F5152"
            css={{
              ...cssTextHeadlineHighlight,
              textGradient: "0deg, #1d3f66 -20%, #3c1bd4db 10%"
            }}>
            distributed device
          </Text>
          <Text
            // className="introduction__text"
            css={{
              ...cssTextHeadlineH1
            }}
          >
            protocol for a Better World.
          </Text>
        </Card.Body>
      </Card>
    </Container >
  );
}
