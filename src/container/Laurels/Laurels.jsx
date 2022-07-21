import React from "react";

import images from "../../constants/images";
import data from "../../constants/data";
import SubHeading from "../../components/SubHeading/SubHeading";

import "./Laurels.css";
import AwardCard from "../AwardCard/AwardCard";

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="rewards">
      <div className="app__wrapper_info">
        <SubHeading text="Awards & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
      </div>

      {data.awards.map((award, index) => {
        {
          console.log(award.imgUrl);
        }
        return (
          <div className="app__laurels_awards">
            <AwardCard key={index} imgUrl={award.imgUrl} title={award.title} subtitle={award.subtitle} />;
          </div>
        );
      })}

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="Laurels" />
      </div>
    </div>
  );
};

export default Laurels;
