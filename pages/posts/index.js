
import * as contentful from 'contentful';
import Head from 'next/head';

var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// function Posts({ post, posts, category }) {
//   console.log("posts:", post, posts, category)
//   return (
//     <>
//       <Head>
//         <title>Zeilen aus der Mühle</title>
//         <meta name="description" content={'Ein Blog über das Leben im Wendland'} key="description" />
//       </Head>
//       Posts
//     </>
//   )
// }

function Posts({}) {
  // console.log("posts:", post, posts, category)
  return (
    <>
      <Head>
        <title>Zeilen aus der Mühle</title>
        <meta name="description" content={'Ein Blog über das Leben im Wendland'} key="description" />
      </Head>
      Posts
    </>
  )
}

// export async function getServerSideProps(props) {
  // const { slug } = context.params

  // const post = await client.getEntry('3PZ8ZrN0Yawx9r1lOcMPnR')
  // const posts = await client.getEntries()
  // const category = await client.getContentType('productReview')

//   return {
//     props: {
//     },
//   }
// }

export default Posts
