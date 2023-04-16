import React from "react";
import {
  HomeDisable,
  HomeEnable,
  SearchDisable,
  SearchEnable,
  LibraryDisable,
  LibraryEnable,
} from "../ComponentsSvg/SvgSpotify";
import { Divider } from "@chakra-ui/react";
import PlaylistListNav from "./PlaylistListNav/PlaylistListNav";

function Nav() {
  return (
    <nav className="nav">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      />
      <div className="optionsNav">
        <a href="/home">
          <div className="nav-option">
            <HomeDisable/> <p>Home</p>
          </div>
        </a>

        <a href="/search">
          <div className="nav-option">
            <SearchDisable /> <p>Search</p>
          </div>
        </a>

        <a href="/library">
          <div className="nav-option">
            <LibraryDisable /> <p>Library</p>
          </div>
        </a>
      </div>

      <Divider orientation="horizontal" />

      <PlaylistListNav />
    </nav>
  );
}

export default Nav;
