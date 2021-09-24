import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarRow.scss";

function SidebarRow({ title, src, Icon }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} className="sidebarRow__Avatar" />}
      {Icon && <Icon />}
      <span className="sidebarRow__title">{title}</span>
    </div>
  );
}

export default SidebarRow;
