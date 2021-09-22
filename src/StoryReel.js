import React from "react";
import Story from "./Story";
import "./StoryReel.scss";

function StoryReel() {
  return (
    <div className="storyReal">
      <Story
        image="https://i.pinimg.com/736x/85/8e/00/858e00ea90f77bd6f41c9759a23c53d8.jpg"
        title="Mitt Parmar"
        profileSrc="https://thumbs.dreamstime.com/b/close-up-portrait-nice-person-bristle-show-finger-okey-sign-isolated-pink-color-background-203466939.jpg"
      />
      <Story
        image="https://i.pinimg.com/736x/10/f1/12/10f112f5d54a9c68f7e70eee3e68bc7c.jpg"
        title="Divyash Bhatnagar"
        profileSrc="http://thoughtcatalog.com/wp-content/uploads/2014/05/shutterstock_101032591.jpg"
      />
      <Story
        image="https://i.pinimg.com/originals/7c/94/12/7c9412c8e81218d65cdd6f3611b9628f.png"
        title="Vish Verma"
        profileSrc="https://thumbs.dreamstime.com/b/portrait-beautiful-nice-person-good-mood-arm-chin-looking-empty-space-teal-sweater-isolated-pink-color-background-204807562.jpg"
      />
      <Story
        image="https://i.pinimg.com/originals/9e/4a/93/9e4a937961bc94e9d4c1a929ce3d0e98.jpg"
        title="Vishesh Bhatt"
        profileSrc="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"
      />
      <Story
        image="https://i.pinimg.com/originals/16/b9/28/16b9282370f627d4e02dd8e89f938f07.jpg"
        title="Richa Patel"
        profileSrc="https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg"
      />
    </div>
  );
}

export default StoryReel;
