import "./Header.css";
import MainMenu from "./MainMenu";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img
            src="https://c2.staticflickr.com/2/1789/41965143275_b762350741_o.png"
            alt="icon"
          />
        </div>
        <MainMenu />
        <button className={"primary"}>Contact Me</button>
      </div>
    </>
  );
}
