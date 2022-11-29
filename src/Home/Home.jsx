import "./Home.css";
import ProfileCover from "./ProfileCover";
import LatestPosts from "./LatestPosts";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <ProfileCover />
      <Skills
        data={["React", "NodeJS", "Redux"]}
        colors={[
          "greenToBlue",
          "purpleToBlue",
          "pinkToOrange",
          "redToYellow",
          "teal",
          "lime",
          "pink",
          "purple",
        ]}
      />
      <LatestPosts />
    </>
  );
}
