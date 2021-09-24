import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Post.scss";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function Post({ profilePic, image, username, timestamp, message }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option" onClick={handleLike}>
          {isLiked ? (
            <ThumbUpIcon className="icon__liked" />
          ) : (
            <ThumbUpAltOutlinedIcon />
          )}

          <p>{isLiked ? "Liked" : "Like"}</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeOutlinedIcon />
          <p>Share</p>
        </div>
        {/* <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div> */}
      </div>
    </div>
  );
}

export default Post;
