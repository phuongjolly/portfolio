import Header from "./Header/Header";
import ErrorBoundary from "./common/ErrorBoundary";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

export default function Root() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <Header />
          <ErrorBoundary fallback={<h2>Could not fetch posts.</h2>}>
            <Suspense fallback={<h1>Loading posts...</h1>}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
          <Footer />
        </div>
      </div>
    </div>
  );
}
