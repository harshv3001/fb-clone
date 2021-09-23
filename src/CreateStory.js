import React from "react";
import "./CreateStory.scss";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function CreateStory({ profileSrc }) {
  return (
    <div className="createStory">
      <img
        className="createStory__img"
        src={profileSrc}
        alt="profile-pic"
      ></img>
      <div className="createStory__bottom">
        <div className="addIcon__outer">
          <AddCircleIcon className="addStory__icon" />
        </div>
        <div className="addStory__title">Create story</div>
      </div>
    </div>
  );
}

export default CreateStory;
