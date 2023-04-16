import React from "react";

import "./Login.css";
import dataUrl from "../../helpers/dataUrl.json";
function Login() {

   let url = `https://accounts.spotify.com/authorize?client_id=${dataUrl.clientId}&response_type=${dataUrl.responseTpye}&scope=${dataUrl.scope}&redirect_uri=${dataUrl.redirectURL}`;
   

  return (
    <div className="containerLogin">
      <div className="loginDiv">
        <img
          className="spotifyLogoLogin"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt=""
        />
        <p>
          Millions of songs. <br /> Free on Spotify.
        </p>
        <a href={url}>
            <button className="spotifyLogin">Login</button>
        </a>
        
      </div>
    </div>
  );
}

export default Login;
