import { useEffect, useState } from "react"
import {getPlaylistName } from "./getDataForNav"
import uuid from 'react-uuid';
import SkeletonsPlaylistNav from "../../Skeletons/SkeletonsPlaylistNav";

        
function PlaylistListNav() {
    
    const [playlistName, setPlaylistName] = useState(undefined);




    useEffect(() => {
        
        async function dataUser(){
            setPlaylistName(await getPlaylistName())
        }
        dataUser()

        
    }, [])


    return (
    <div className="divPlaylistName">
        {   
            playlistName != undefined ?
            
            playlistName.items.map((e) => {
                let href = `/playlist#playlist_id=${e.id}`
                return <a href={href} key={uuid()} ><p className="playlistNameString" id={e.id}>{e.name}</p></a>
            })

            : 
            <SkeletonsPlaylistNav/>
            
        }
        
    </div>
  )
}

export default PlaylistListNav