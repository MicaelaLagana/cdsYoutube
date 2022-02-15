import {React, createContext, useState, useContext} from "react";

const contextCDS = createContext();

const url = 'https://www.googleapis.com/youtube/v3/';
const key = 'AIzaSyDlhZN19kdPW6ugY0mru4VtvhKSw1O6Goc'
const requestUrl = `${url}search?part=snippet&key=${key}`;

export const ProviderCDS = ({children}) => {
    const [state, setState] = useState({});
    const [videos, setVideos] = useState([]);
    const [videoID, setVideoID] = useState("");
    const [title, setVideoTitle] = useState("");
    const [description, setVideoDescription] = useState([]);
    const [thumbnails, setVideoThumbnail] = useState("");

    const requestUrlID = `${url}videos?key=${key}&part=snippet&id=${videoID}`;

    async function GetVideos() {
        await fetch(requestUrl)
        .then(res => res.json())
        .then(
          data => {
           setVideos(data.items);
           setVideoID(data.items[0].id.videoId);
           setVideoTitle(data.items[0].snippet.title);
           console.log("id: ", data.items[0].id.videoId)
          }).catch((error) => {
          console.log("error: ", error)
        })
      }

      async function GetVideoByID() {
        await fetch(requestUrlID)
        .then(res => res.json())
        .then(
          data => {
           setVideoDescription(data.items[0].snippet.description);
           setVideoThumbnail(data.items[0].snippet.thumbnails.standard.url);
           setVideoTitle(data.items[0].snippet.title);
           console.log("thumbnail: ", data.items[0].snippet.thumbnails.standard.url)
          }).catch((error) => {
          console.log("error: ", error)
        })
      }
      
    return (
            <contextCDS.Provider value={{
                state, setState,
                videos, setVideos,
                videoID, setVideoID,
                title, setVideoTitle,
                description, setVideoDescription,
                thumbnails, setVideoThumbnail,
                GetVideos,
                GetVideoByID,
            }}>
                {children}
            </contextCDS.Provider>        
    );
}

export const useContextCDS = () => useContext(contextCDS);