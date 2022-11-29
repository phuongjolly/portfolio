import profileBg from "../assets/profile.svg";
import profilePicture from "../assets/profile-picture.png";

export default function ProfileCover() {
  return (
    <div
      className={
        "profile-cover flex flex-row justify-between gap-5 items-center"
      }
    >
      <div className={"flex flex-col"}>
        <div className={"hello-text"}>Hi!</div>
        <div className={"hello-text"}>Welcome to My Blog</div>
        <div className="more-info-text">
          Full stack developers with more than 3 years of experiences
        </div>
        <div className={"flex flex-row gap-4"}>
          <button className="secondary">Contact Me</button>
          <button className="primary">Demos</button>
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
