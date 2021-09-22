import React, { useState, useEffect } from "react";
import "./Feed.scss";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./firebaseSetup";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);
  console.log("posts", posts);
  return (
    <div className="feed">
      <StoryReel />
      <div>
        <MessageSender />
        {posts.map((post) => (
          <Post
            key={post.id}
            image={post.data.image}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            profilePic={post.data.profilePic}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
