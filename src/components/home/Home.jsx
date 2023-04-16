import { useEffect } from "react";
import Nav from "./Nav";
import "./home.css";
import GoodDay from "./GoodDay";
function Home() {
  async function getUserData() {

    const url = window.location.href;
    const searchParams = new URLSearchParams(url.split('#')[1]);
    const accessToken = searchParams.get('access_token');
    localStorage.setItem("codeUser", accessToken || localStorage.getItem("codeUser"));

    const options = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("codeUser")}`
      },
      json: true
    };

    const res = await fetch("https://api.spotify.com/v1/me", options).catch((e) =>
      console.log({ error: e })
    );
    const data = await res.json();
    localStorage.setItem("userData", JSON.stringify(data).toString("base64"));
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="container">
      <Nav/>
      <GoodDay/>
      
    </div>
  );
}

export default Home;
