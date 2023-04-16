export async function getPlaylistName() {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("codeUser")}`,
      },
      json: true,
    };
    const res = await fetch(
      "https://api.spotify.com/v1/me/playlists",
      options
    ).catch((e) => console.log({ error: error }));
    const data = await res.json();
    return data;
  } catch (error) {
    console.log({ Error: error });
  }
}

export async function getActuallyTrack() {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("codeUser")}`,
      },
      json: true,
    };
    const res = await fetch(
      "https://api.spotify.com/v1/me/player",
      options
    ).catch((e) => console.log({ error: error }));
    const data = await res.json();
    return data;
  } catch (error) {
    console.log({ Error: error });
  }
}
