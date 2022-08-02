import { Card, Container, Image, Text } from "@nextui-org/react";
import { space } from "../../styles/theme/settings";


import { IntroductionImageWrapper } from './Introduction.styled';
export default function Introduction(props) {

  return (
    <Container display="flex" gap={0} direction='column-reverse'
      css={{
        '@lg': {
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'center',
        },
      }}
    >
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
          <Text className="introduction__text" size={91} color="#4F5152" css={{ lineHeight: '96px' }}>
            Web3
          </Text>
          <Text className="introduction__text introduction__text--highlighted" size={91} color="#4F5152" css={{ lineHeight: '118px', textGradient: "0deg, #1d3f66 -20%, #3c1bd4db 50%", }}>
            distributed sensing
          </Text>
          <Text className="introduction__text" size={91} color="#4F5152" css={{ lineHeight: '96px' }}>
            for a cleaner, more productive world.
          </Text>
          <Container display="flex" alignItems="center" justify="space-evenly"
            css={{ marginTop: space.lg }}
          >
          </Container>
        </Card.Body>
      </Card>
    </Container >
  );
}
