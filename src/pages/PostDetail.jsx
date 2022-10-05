import { useLoaderData } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import NewsletterSignup from '../components/NewsletterSignup';
import { getPost } from '../util/api';

function PostDetailPage() {
  const postData = useLoaderData();
  return (
    <>
      <BlogPost title={postData.title} text={postData.body} />
      <NewsletterSignup />
    </>
  );
}

export default PostDetailPage;

export function loader({params}) { 
  // the loader function will automatically (with react router) be passed a request and a params object. We can access that params to take the needed data (here the id) to retrieve the correct post's detail !
  const postId = params.id;
  return getPost(postId);
}