import { Link } from "react-router-dom";

export default function MainMenu() {
  return (
    <div
      className="flex flex-row items-center justify-end md:justify-between text-base
    font-semibold leading-5 w-2/3 md:w-1/3 gap-2"
    >
      <Link to="/">About Me</Link>
      <Link to="/showcase">Demos</Link>
    </div>
  );
}
