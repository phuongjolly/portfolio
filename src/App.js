import "./App.css";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Root from "./Root";
import Post from "./Post/Post";
import PostEdit from "./Post/PostEdit";
import ErrorBoundary from "./common/ErrorBoundary";
import Showcase from "./Showcase/Showcase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: "", element: <Home /> },
      { path: "/showcase", element: <Showcase /> },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      {
        path: "/showcase/:id",
        element: <Post />,
      },
      {
        path: "/showcase/:id/edit",
        element: <PostEdit />,
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
