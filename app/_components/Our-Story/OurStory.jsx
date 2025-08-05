import React from "react";
import TripAdvisor from "./2024 TripAdvisor/TripAdvisor";
import Aboutus from "./About-us/Aboutus";
import Discover from "./Discover/Discover";
import Why from "./Why Choose/Why";
import OurTeam from "./Our Team/OurTeam";
import Explore from "./Discover our feuture/Explore";
import Process from "./Process/Process";
import OurStoryBanner from "./OurStoryBanner/OurStoryBanner";

const OurStory = () => {
  return (
    <div>
      <OurStoryBanner/>
      <TripAdvisor />
      <Explore />
      <Aboutus />
      <Discover />
      <Process />
      <OurTeam />
      <Why />
    </div>
  );
};

export default OurStory;
