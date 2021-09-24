import React from "react";
import "./Header.scss";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";

import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <>
      <div className="header">
        <div className="header__left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
            alt="fb"
          />
          <div className="header__input">
            <SearchIcon className="search__icon" />
            <input placeholder="Search Facebook" type="text" />
          </div>
        </div>
        <div className="menu__icon">
          <MenuIcon />
        </div>
        <div className="header__center">
          <div className="header__option home__active">
            <HomeIcon />
          </div>
          <div className="header__option">
            <FlagIcon />
          </div>
          <div className="header__option">
            <SubscriptionsIcon />
          </div>
          <div className="header__option">
            <StorefrontIcon />
          </div>
          <div className="header__option">
            <SupervisedUserCircleIcon />
          </div>
        </div>
        <div className="header__right">
          <div className="header__info">
            <Avatar src={user.photoURL} className="header__avatar" />
            <h4>{user.displayName}</h4>
          </div>
          <IconButton>
            <div className="icon__round">
              <AppsRoundedIcon />
            </div>
          </IconButton>
          <IconButton>
            <div className="icon__round">
              <ChatRoundedIcon className="header_right__icon" />
            </div>
          </IconButton>
          <IconButton>
            <div className="icon__round">
              <NotificationsRoundedIcon className="header_right__icon" />
            </div>
          </IconButton>
          <IconButton>
            <div className="icon__round">
              <ArrowDropDownRoundedIcon />
            </div>
          </IconButton>
        </div>
      </div>

      <div className="header2">
        <div className="header__option home__active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <FlagIcon />
        </div>
        <div className="header__option">
          <SubscriptionsIcon />
        </div>
        <div className="header__option">
          <StorefrontIcon />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon />
        </div>
      </div>
    </>
  );
}

export default Header;
