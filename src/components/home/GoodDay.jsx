import { useEffect, useState } from "react";
import { getPlaylistName } from "./PlaylistListNav/getDataForNav";
import uuid from 'react-uuid';
import SkeletonGoodDay from "../Skeletons/SkeletonGoodDay";

function GoodDay() {
  const [topPlaylist, setTopPlaylist] = useState(undefined);

  useEffect(() => {
    async function setTop() {
      setTopPlaylist(await getPlaylistName());
    }
    setTop();
  }, []);

  return (
    <>
      <div className="title">
        <h1>Good Morning</h1>
      </div>

      <div className="goodDay">
        {topPlaylist != undefined 
          ?
            topPlaylist.items != undefined ? 
          topPlaylist.items.map((playlist, index) => {
              if (index > 5) {
                return;
              }

              return (
                
                  <div key={uuid()} onClick={(e) => {
                      e.preventDefault
                      document.location = `playlist#playlist_id=${playlist.id}`

                  }} id={playlist.id} className="topPlaylist">
                    <img src={playlist.images[0].url} alt="" />
                    <p>{playlist.name}</p>
                  </div>
                
              );
            })
            : ""
          : 
              <SkeletonGoodDay/>
          }
      </div>
    </>
  );
}

export default GoodDay;
