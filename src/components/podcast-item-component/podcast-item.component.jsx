import React from "react";
import "./podcast-item.styles.scss";

const PodcastItem = ({ videoId, videoImage, title }) => (
  <div className="podcast-item">
    <div
      className="item-image"
      style={{
        backgroundImage: `url(${videoImage})`,
      }}
    ></div>
    <div className="item=inner">
      <h1>{title}</h1>
      <p>
        Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc
        tempor lobortis nunc non. Mi accumsan.
      </p>
      <button>Poopi</button>
    </div>
  </div>
);

export default PodcastItem;
