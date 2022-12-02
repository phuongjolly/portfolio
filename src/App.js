import "./App.css";
import { createContext, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useSWR from "swr";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Root from "./Root";
import Post from "./Post/Post";
import PostEdit from "./Post/PostEdit";
import ErrorBoundary from "./common/ErrorBoundary";
import Showcase from "./Showcase/Showcase";
import Login from "./Login/Login";
import { UserContext } from "./UserContext";

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
        path: "/showcase/add",
        element: <PostEdit />,
      },
      {
        path: "/showcase/:id/edit",
        element: <PostEdit />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  const { data } = useSWR("/api/me", { suspense: true });
  return (
    <Suspense fallback={<div>loading...</div>}>
      <UserContext.Provider value={data.currentUser}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </Suspense>
  );
}

export default App;
