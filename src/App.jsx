import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader as blogPostsLoader } from "./pages/BlogPosts";
import ErrorPage from "./pages/Error";
import NewPostPage, { action as newPostAction } from "./pages/NewPost";
import PostDetailPage, { loader as blogPostLoader } from "./pages/PostDetail";
import RootLayout from "./pages/RootLayout";
import WelcomePage from "./pages/Welcome";
import DeferredBlogPostsPage, {
  loader as deferredBlogPostsLoader,
} from './pages/DeferredBlogPosts';
import { action as newsletterAction } from './pages/Newsletter';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />} errorElement={<ErrorPage/>}>
//       {/* Outlet will render the child components defined under */}
//       <Route index element={<WelcomePage />} />
//       {/* index route is the component that will be rendred when the parent route is activated (here it's '/') */}
//       <Route path="/blog" element={<BlogLayout />}>
//         <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
//         {/* index route is the component that will be rendred when the parent route is activated (here it's '/blog') */}
//         <Route
//           path=":id"
//           element={<PostDetailPage />}
//           loader={blogPostLoader}
//         />
//         {/* the loader function we export in PostDetail is passed to the route. */}
//       </Route>
//       {/* the action function we export in NewPost is passed to this route because we want to "send" the data of the newPostForm there. */}
//       <Route path="/blog/new" element={<NewPostPage />} action={newPostAction} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WelcomePage /> },
      {
        path: '/blog',
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <DeferredBlogPostsPage />,
            loader: deferredBlogPostsLoader,
          },
          {
            path: ':id',
            element: <PostDetailPage />,
            loader: blogPostLoader,
          },
        ],
      },
      {
        path: '/blog/new',
        element: <NewPostPage />,
        action: newPostAction,
      },
    ],
  },
  {
    path: '/newsletter',
    action: newsletterAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
