import { Link } from "react-router-dom";
import "./Header.css";

export default function Welcome() {
  const currentUser = null;

  if (currentUser) {
    return (
      <div className="hello-message">
        <div className="hello"> Hello </div>
        <div className="username">{currentUser.name}</div>
        <button className="ui button helloButton" onClick={() => {}}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="hello-message flex flex-row justify-between gap-2">
      <p>Admin?</p>
      <Link
        to={{
          pathname: "/user/login",
        }}
        className="ui link login-button"
      >
        Login
      </Link>
    </div>
  );
}
