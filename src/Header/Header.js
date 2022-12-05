import "./Header.css";
import MainMenu from "./MainMenu";

export default function Header() {
  return (
    <>
      <div className="header px-4 py-8 md:px-14">
        <div className="header-logo">
          <img
            src="https://c2.staticflickr.com/2/1789/41965143275_b762350741_o.png"
            alt="icon"
          />
        </div>
        <MainMenu />
        <button className={"primary hidden md:block"}>Contact Me</button>
      </div>
    </>
  );
}
