import { Navbar } from "flowbite-react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
        style={{ backgroundColor: "#F4F0F1" }}
      >
        <Navbar.Brand href="https://www.phuongjolly.com/">
          <img
            src="https://c2.staticflickr.com/2/1789/41965143275_b762350741_o.png"
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <a href={"mailto: lephuong06t3@gmail.com"}>
            <button className={"primary hidden md:block"}>Contact Me</button>
          </a>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">About Me</Navbar.Link>
          <Navbar.Link href="/showcase">Demos</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
