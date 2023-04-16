import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Nav from '../home/Nav';
import { getPlaylistData, getPlaylistTracks } from './getPlaylist';
import "../home/home.css"
import "./playlist.css"
import PlaylistTracks from './PlaylistTracks';


function Playlist() {
    const [playlistId, setPlaylistId] = useState(""); 
    const [playlistData, setPlaylistData] = useState();
    const location = useLocation();

    useEffect(() => {
        const playlistIdParam = location.hash.split("=")[1]
        
        if (playlistIdParam) {
            setPlaylistId(playlistIdParam);
        }
        async function loadData(){
            setPlaylistData(await getPlaylistData(playlistIdParam))
        }
        loadData();
        console.log(playlistIdParam)
    }, [location.hash.split("=")[1]]);

    const [showElement, setShowElement] = useState(true);

    useEffect(() => {
      async function fetchData() {
        setPlaylistName(await getPlaylistName());
      }
      fetchData();
  
    }, []);


        return (
            <div className='container'>
                <div className='mainPlaylistData' style={{ opacity: showElement ? 1 : 0 }}>
                    <img src={playlistData != undefined ? playlistData?.images != undefined ? playlistData?.images[0].url : "" : ""} alt="" />
                    <div>
                        <p style={{"color": "white", "marginTop": "70px", "marginBottom": "-20px"}}>{playlistData != undefined ? playlistData?.public === true : "" ? "Public" : ""}</p>
                        <h1>{playlistData != undefined ? playlistData?.name : ""}</h1>
                        <p style={{"color": "white"}}>{playlistData != undefined ? playlistData?.owner != undefined ? playlistData?.owner.display_name : "" : ""} • {playlistData != undefined ? playlistData?.followers != undefined ? playlistData.followers.total : "" : ""} likes • {playlistData != undefined ? playlistData.tracks != undefined ?  playlistData.tracks.total : "" : ""} songs</p>
                    </div>
                </div>
                
    
                <Nav />
                <PlaylistTracks playlistId={playlistId} />
    
    
            </div>  
        )



    

}

export default Playlist;
