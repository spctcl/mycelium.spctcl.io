import { useState } from 'react';
import { BlogPreviewCard, BlogPreviewContainer, BlogPreviewText, BlogPreviewTitle } from './blogPreview.style';

export default function BlogPreview({ posts }) {
  const [blogPosts, setBlogPosts] = useState(posts)

  // useEffect(() => {
  //   console.log("useEffect1", blogPosts)

  //   if (!blogPosts.length) {
  //     setBlogPosts(posts.items)
  //     console.log("useEffect2", blogPosts)
  //   }
  // }, [posts]);


  return (
    <BlogPreviewContainer>Test
      {blogPosts?.items?.map((el, index) => {
        return <BlogPreviewCard key={`blog-preview-${index}`}>
          <BlogPreviewTitle>{el.fields.title}</BlogPreviewTitle>
          <BlogPreviewText>Text: {el.fields.text}</BlogPreviewText>
          <p>Element {index} </p>
        </BlogPreviewCard>
      })}

      Aus
    </BlogPreviewContainer>
  );
}
