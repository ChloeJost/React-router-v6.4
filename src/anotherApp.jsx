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