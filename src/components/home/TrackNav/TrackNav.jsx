import { useEffect, useState, useRef } from "react";
import "./TrackNav.css";
import { getActuallyTrack } from "../PlaylistListNav/getDataForNav";
import { Divider } from "@chakra-ui/react";
import { ReanudarTema, PausarTema, AdelantarTema, TemaAtras} from "../../ComponentsSvg/SvgSpotify";
import {
  Skeleton,
  Stack,
  SkeletonCircle,
  SkeletonText,
  
} from "@chakra-ui/react";

function TrackNav() {
  const [actuallyTrack, setActuallyTrack] = useState({});
  const timelapseRef = useRef(null);
  const progresoRef = useRef(null);

  localStorage.setItem("actuallyIdTrack", actuallyTrack.item != undefined ? actuallyTrack.item.id : "")

  useEffect(() => {
    async function actuallyTrackSong() {
      setActuallyTrack(await getActuallyTrack());
    }
    actuallyTrackSong();
    
    

    const intervalId = setInterval(actuallyTrackSong, 1000);
    return () => clearInterval(intervalId);
    
    
    
  }, []);

  function changeWindowTitle(){

    document.title = `${actuallyTrack?.item != undefined ? actuallyTrack.item.name : "Spotify Clone"} • ${actuallyTrack?.item != undefined ? actuallyTrack.item.artists.map((e, index) => {return `${e.name} ${index > 0 === true ? "," : ""}` }) : ""}` || "Spotify Clone"; 

  }
  changeWindowTitle()

  function chageWidthBar(){
    const pxBar = timelapseRef.current?.clientWidth || 0;
    try{
      const maxTime = actuallyTrack.item?.duration_ms ? Math.floor(actuallyTrack.item != undefined ? actuallyTrack.item.duration_ms : 0 / 1000) : 0;
      const progressTime = actuallyTrack.progress_ms ? Math.floor(actuallyTrack.progress_ms != undefined ? actuallyTrack.progress_ms : 0 / 1000) : 0;
      const pxPerSecond = pxBar / maxTime;
      return `${pxPerSecond * progressTime}px`;
    }catch(error){
      return(error)
    }


    
  }
  chageWidthBar()
  
  return (
    <>
      <div className="TrackNav">
        <div className="infoActualTrack">


          {
            actuallyTrack?.item != undefined ? 

            <img
            src={
              actuallyTrack?.item != undefined
                ? actuallyTrack.item.album.images[0].url
                : ""
            }
            className="imageActuallyTrack"
            alt=""
          /> 

          :
          <SkeletonCircle height={"70px"} width={"70px"} marginLeft={"20px"}/>

          }


          <div className="textActuallyArtist">

            {
              actuallyTrack?.item?.name != undefined ? 

              <p className="titleActuallyTrack" style={{ color: "white" }}>
              {actuallyTrack?.item != undefined ? actuallyTrack?.item.name : ""}
              </p>

            : 
              <Skeleton height={"5px"}/>

            }



            <div className="ArtistActually">
              {actuallyTrack?.item != undefined
                ? actuallyTrack?.item.artists.map((e, index) => {
                    let nombres = `${e.name},  `;
                    return (
                      <p key={e.id}
                        style={{ fontWeight: "bold", fontSize: "0.6rem" }}
                        className="artistNameActuallyTrack"
                      >
                        {nombres}
                      </p> 
                    );
                  })
                : ""}
            </div>
          </div>

        </div>


        <div className="controlsMusic">

            <div className="controlButtons">
              <button onClick={(e) => {
                e.preventDefault

                async function skipToPrevious() {
                  const accessToken = localStorage.getItem("codeUser");
                
                  const response = await fetch("https://api.spotify.com/v1/me/player/previous", {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${accessToken}`,
                    },
                  });
                }
                skipToPrevious()

              }} ><TemaAtras/></button>
              <button className="buttonMain" onClick={(e) => {
                e.preventDefault
                

                const pauseMusic = async () => {
                  const url = 'https://api.spotify.com/v1/me/player/pause';
                  const authToken = `Bearer ${localStorage.getItem("codeUser")}`;
                
                  await fetch(url, {
                    method: 'PUT',
                    headers: {
                      Authorization: authToken,
                      'Content-Type': 'application/json'
                    }
                  });
                };
                
                const resumeMusic = async () => {
                  const url = 'https://api.spotify.com/v1/me/player/play';
                  const authToken = `Bearer ${localStorage.getItem("codeUser")}`;
                
                  await fetch(url, {
                    method: 'PUT',
                    headers: {
                      Authorization: authToken,
                      'Content-Type': 'application/json'
                    }
                  });
                };
                
              
                actuallyTrack?.is_playing === false ? resumeMusic() : pauseMusic()

              }}>{actuallyTrack?.is_playing === false ? <ReanudarTema /> : <PausarTema/>}</button>
              <button onClick={(e) => {

                  e.preventDefault
                  async function skipToNext() {
                    const accessToken = localStorage.getItem("codeUser");

                    const response = await fetch("https://api.spotify.com/v1/me/player/next", {
                      method: "POST",
                      headers: {
                        Authorization: `Bearer ${accessToken}`,
                      },
                    });
                  }
                    skipToNext();
                    
                  



              }}><AdelantarTema/></button>
            </div>
            
            <div className="timelapse" ref={timelapseRef}>
              <div className="progreso" style={{"width": chageWidthBar()}} ref={progresoRef}></div>
            </div>

          </div>

          <div className="extras">
            <p>Extras</p>
          </div>

      </div>
    </>
  );
}

export default TrackNav;
