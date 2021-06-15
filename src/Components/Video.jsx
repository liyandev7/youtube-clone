import React from "react";
import "./video.css";
import { Avatar } from "@material-ui/core";
function Video({ title, image, avatar, name, views, date }) {
  return (
    <div className="video__card">
      <img src={image} className="image__video" />
      <div className="option__heading">
        <Avatar alt={name} src={avatar} className="video__avatar" />
        <h2>{title}</h2>
      </div>
      <div className="video__card__info">
        <div className="video__description">
          <p className="mb-5">{name}</p>
          <p className="mb-5">
            {views} views , {date} ago
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
