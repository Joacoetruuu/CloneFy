export async function getPlaylistTracks(playlist_id){
    try{

        const options = {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("codeUser")}`,
            },
            json: true,
          };

        const res = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, options).catch(error => {console.log(error)})
        const data = await res.json(); 
        return data
    }catch(error){
        console.log({"error": error})
    }

}

export async function getPlaylistData(playlist_id){
    try{

        const options = {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("codeUser")}`,
            },
            json: true,
          };

        const res = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, options).catch(error => {console.log(error)})
        const data = await res.json(); 
        return data
    }catch(error){
        console.log({"error": error})
    }

}