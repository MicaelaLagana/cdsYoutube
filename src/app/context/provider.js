import {React, createContext, useState, useContext} from "react";

const contextCDS = createContext();

const url = 'https://www.googleapis.com/youtube/v3/';
const key = 'AIzaSyDAfhFNULJtmZBFRBYidlJzz_IYijWiuN0'
const requestUrl = `${url}search?part=snippet&key=${key}`;

export const ProviderCDS = ({children}) => {
    const [state, setState] = useState({});
    const [counter, setCounter] = useState(0);
    const [videos, setVideos] = useState([]);
    const [videoID, setVideoID] = useState("");
    const [title, setVideoTitle] = useState("");
    const [description, setVideoDescription] = useState([]);
    const [thumbnails, setVideoThumbnail] = useState("");

    const requestUrlID = `${url}videos?key=${key}&part=snippet&id=${videoID}`;
    const maxResults = "&maxResults=4"

    async function GetVideos() {
        await fetch(requestUrl+maxResults)
        .then(res => res.json())
        .then(
          data => {
           setVideos(data.items);
           setVideoID(data.items[0].id.videoId);
           setVideoTitle(data.items[0].snippet.title);
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
          }).catch((error) => {
          console.log("error: ", error)
        })
      }

      async function GetSearchThemeVideos(search) {
        const QVideos =  `${requestUrl}&q=${search}`
        await fetch(QVideos)
        .then(res => res.json())
        .then(
          data => {
            setVideos(data.items);
            setVideoID(data.items[0].id.videoId)
            setVideoTitle(data.items[0].snippet.title)
          }).catch((error) => {
            console.log("error: ", error)
          })
        }

        function handleVideoOnClick(vID, vTitle) {
            setVideoID(vID);
            setVideoTitle(vTitle);
            setCounter(counter + 1);
            console.log("handleVideoOnClick: " + videoID + title)
        }
      
    return (
            <contextCDS.Provider value={{
                state, setState,
                counter, setCounter,
                videos, setVideos,
                videoID, setVideoID,
                title, setVideoTitle,
                description, setVideoDescription,
                thumbnails, setVideoThumbnail,
                GetVideos,
                GetVideoByID,
                GetSearchThemeVideos,
                handleVideoOnClick,
            }}>
                {children}
            </contextCDS.Provider>        
    );
}

export const useContextCDS = () => useContext(contextCDS);