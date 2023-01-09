import profileBg from "../assets/profile.svg";
import profilePicture from "../assets/profile-picture.png";
import { Link } from "react-router-dom";

export default function ProfileCover() {
  return (
    <div
      className={
        "profile-cover flex flex-col justify-between gap-5 items-center px-4 py-8 md:flex-row md:px-14"
      }
    >
      <div className={"flex flex-col"}>
        <div className={"hello-text"}>Hi!</div>
        <div className={"hello-text"}>Welcome to My Blog</div>
        <div className="more-info-text">
          More than 3 years working as full stack developer and 5 years working
          as game programmer
        </div>
        <div className={"flex flex-row gap-4"}>
          <button
            onClick={() => {
              window.location = "mailto: lephuong06t3@gmail.com";
            }}
            className="secondary"
          >
            Contact Me
          </button>
          <Link to={"/showcase"}>
            <button className="primary">Demos</button>
          </Link>
        </div>
      </div>
      <div
        className={"profile-image"}
        style={{
          backgroundImage: `url(${profileBg})`,
        }}
      >
        <img src={profilePicture} alt={"profile"} />
      </div>
    </div>
  );
}
