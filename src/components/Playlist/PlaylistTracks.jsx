import { useEffect, useState } from "react";
import { getPlaylistTracks } from "./getPlaylist";
import uuid from 'react-uuid';
import { useLocation } from 'react-router-dom';
import millisecondsToMinutes from 'date-fns/millisecondsToMinutes'

function PlaylistTracks({playlistId}) {
  const [allTracksPlaylist, setAllTracksPlaylist] = useState([]);
  const location = useLocation()

  async function getAllPlaylistTracks(playlistId) {

    try{

      let allTracks = [];
      let nextUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=100`;
  
      while (nextUrl) {
        const response = await fetch(nextUrl, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("codeUser"),
            "Content-Type": "application/json",
          },
        });
  
        const data = await response.json();
  
          allTracks = [...allTracks,...data?.items]
          nextUrl = data.next; 
        
      }
      
      return allTracks;

    }catch(error){
      console.log({"error": error})
    }

  }

  async function fetchAllPlaylistTracks(playlistID) {
    const allTracks = await getAllPlaylistTracks(playlistID);
    setAllTracksPlaylist(allTracks);
  }
 
  useEffect(() => {

    
    fetchAllPlaylistTracks(location.hash.split("=")[1]);
 
  }, [])
  
  useEffect(() => {

    
    fetchAllPlaylistTracks(location.hash.split("=")[1]);
 
  }, [location.hash.split("=")[1]])

      
 

  
  return <div className="playlistTracks">

    {
      allTracksPlaylist?.map((song, index) => {
        try{
          return(
            <div key={uuid()} style={{cursor: "pointer"}} className="trackInPlaylist">
              <p style={{color: "white"}}>{index+1}</p>  
              <img src={song.track != null ? song.track.album.images[2].url : ""} alt="" />
              <div className="infoNameTrack">
                <p style={{color: "white"}}>{song?.track?.name}</p>
                <p className="nameArtistTrackPlaylist">{song?.track.artists[0].name}</p>
              </div>
              <p>{}</p>
              
              
  
            </div>
          )
        }catch(error){
          <div>{error}</div>
        }



      }) 
    }



  </div>;
}

export default PlaylistTracks;
