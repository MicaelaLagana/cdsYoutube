import React, { useEffect, useState } from 'react';
import ButtonNav from "../../components/button";
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';

const url = 'https://www.googleapis.com/youtube/v3/';
const key = 'AIzaSyDlhZN19kdPW6ugY0mru4VtvhKSw1O6Goc'

const useStyle = makeStyles({
    container: {
        padding: "30px",
    },
    containerRow: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "100%",
        justifyContent: "center",
        justifyItems: "center",
        padding: "30px",
    },
    video: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "justify",
      justifyItems: "justify",
      margin: "2em",
    },
    text: {
        display: "flex",
        flexDirection: "column",
        padding: "2em"
    },
    title: {
        textAlign: "justify",
        fontSize: "30px",
        fontWeight: "bold",
        alignContent: "center",
        margin: "0px",
        padding: "1em"
    },
    button: {
        alignContent: "center",
        margin: "1em",
        padding: "1em"
    },
})

export default function VideoDetail() {
    const { id } = useParams()
    const [description, setVideoDescription] = useState([]);
    const [title, setVideoTitle] = useState("");
    const [thumbnails, setVideoThumbnail] = useState("");
    const classes = useStyle();
    const requestUrl = `${url}videos?key=${key}&part=snippet&id=${id}`;
    
    useEffect(() => {
        GetVideoByID();
    }, []); 

    async function GetVideoByID() {
        await fetch(requestUrl)
        .then(res => res.json())
        .then(
          data => {
           setVideoDescription(data.items[0].snippet.description);
           setVideoThumbnail(data.items[0].snippet.thumbnails.standard.url);
           setVideoTitle(data.items[0].snippet.title);
           console.log("id: ", data.items[0].id.videoId)
          }).catch((error) => {
          console.log("error: ", error)
        })
      }


    return (
        <Box className={classes.container}>
            <h1 className={classes.title}>{title}</h1>
            <Box className={classes.containerRow}>
                <img src={thumbnails} alt="" className={classes.video}/> 
                <p className={classes.text}>{description}</p>
            </Box>
            <ButtonNav page={"/"} pageName={"Back"} className={classes.button}/>
        </Box>
    );
}