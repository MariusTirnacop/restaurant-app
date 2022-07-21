import React from "react";

import "./AwardCard.css";

const AwardCard = (props) => {
  return (
    <div className="app__laurels_awards-card">
      <img src={props.imgUrl} alt={props.title} />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "DCCA87" }}>
          {props.title}
        </p>
        <p className="p__cormorant">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default AwardCard;
