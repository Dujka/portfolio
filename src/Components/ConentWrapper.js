import React from "react";
import TextCell from "./TextCell";
import FirstSection from "./Text/FirstSection.js";
import SecondSection from "./Text/SecondSection.js";
import ThirdSection from "./Text/ThirdSection.js";

function ConentWrapper() {
  return (
    <div className="flex flex-wrap p-10 mt-10 items-stretch">
      <TextCell title={"MAIN INFO ABOUT ME"}>
        <FirstSection />
      </TextCell>
      <TextCell title={"EDUCATION AND TRAINING"}>
        <SecondSection />
      </TextCell>
      <TextCell title={"EXPERIENCE"}>
        <ThirdSection />
      </TextCell>
    </div>
  );
}

export default ConentWrapper;
