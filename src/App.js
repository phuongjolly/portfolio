import "./App.css";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Root from "./Root";
import Post from "./Post/Post";
import PostEdit from "./Post/PostEdit";
import ErrorBoundary from "./common/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/posts/:id/edit",
        element: <PostEdit errorElement={<ErrorBoundary />} />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
