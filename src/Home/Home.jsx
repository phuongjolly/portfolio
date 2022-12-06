import "./Home.css";
import ProfileCover from "./ProfileCover";
import LatestPosts from "./LatestPosts";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <ProfileCover />
      <Skills
        data={["React", "NodeJS", "Redux", "Tailwind CSS", "MongoDB", "OpenGL"]}
        colors={[
          "purpleToBlue",
          "cyanToBlue",
          "greenToBlue",
          "purpleToPink",
          "pinkToOrange",
          "tealToLime",
          "redToYellow",
        ]}
      />
      <LatestPosts />
    </>
  );
}
