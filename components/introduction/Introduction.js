import { Card, Container, Image, Text } from "@nextui-org/react";
import { IntroductionImageWrapper } from './Introduction.styled';
export default function Introduction(props) {

  return (
    <Container className="introduction-container">
      <IntroductionImageWrapper>
        <Image
          className={'homepage-mushroom-7'}
          src={"mycelium.spctcl.io/img/mycelium_mushroom_7.png"}
          alt="A mushroom"
        />
        <Image
          className={'homepage-mushroom-7'}
          src={"mycelium.spctcl.io/img/mycelium_mushroom_8.png"}
          alt="A mushroom"
        />
      </IntroductionImageWrapper>
      <Card css={{ $$cardColor: '$brandPrimary' }} >
        <Card.Body>
          <Text className="introduction__text">
            Open,
          </Text>
          <Text className="introduction__text introduction__text--highlighted" color="#4F5152" css={{ textGradient: "0deg, #1d3f66 -20%, #3c1bd4db 10%" }}>
            distributed device
          </Text>
          <Text className="introduction__text">
            protocol for a Better World.
          </Text>
        </Card.Body>
      </Card>
    </Container >
  );
}
