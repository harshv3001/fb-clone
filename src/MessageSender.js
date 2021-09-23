import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./MessageSender.scss";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import firebase from "@firebase/app-compat";
import db from "./firebaseSetup";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messangerSender__input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            placeholder="image URL (Optional)"
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <span className="option__text">Live Video</span>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <span className="option__text">Photo/Video</span>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <span className="option__text">Feeling/Activity</span>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
