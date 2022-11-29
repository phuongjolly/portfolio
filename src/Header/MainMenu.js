import { Link } from "react-router-dom";

export default function MainMenu() {
  return (
    <div className="flex flex-row items-center justify-between text-base font-semibold leading-5 w-1/3">
      <Link to="/">Home</Link>
      <Link to="/showcase">Demos</Link>
      <Link to="/about-me">About Me</Link>
    </div>
  );
}
