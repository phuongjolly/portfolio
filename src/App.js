import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Root from "./Root";
import Post from "./Post/Post";
import PostEdit from "./Post/PostEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      { path: "/posts/:id", element: <Post /> },
      { path: "/posts/:id/edit", element: <PostEdit /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
