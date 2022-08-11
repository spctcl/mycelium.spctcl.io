
import { Container, useTheme } from "@nextui-org/react";
import Head from 'next/head';
import Introduction from '../components/introduction/Introduction';
// connect to contentful
// var client = contentful.createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

export default function Home(props) {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Mycelium.spctcl.io</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container gap={0} css={{ paddingTop: '76px', position: 'relative' }}>
        <Introduction />
      </Container>
    </>)
}


export async function getStaticProps() {
  // get data from headless cms
  // const posts = await client.getEntries({
  //   content_type: "post"
  // })


  return {
    props: {
      // posts: await posts, // to pass posts fetched from contentful
    },
  }
}


