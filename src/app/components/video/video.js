import React from 'react';
import { makeStyles } from "@material-ui/core";
import { Box } from '@mui/system';
import Title from '../title';

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "justify",
        padding: "20px"
    },
    video: {
      display: "flex",
      flexDirection: "column",
      width: "45vw",
      height: "30vw",
      justifyContent: "center",
      justifyItems: "center",
      margin: "10px",
    },
  });

  const videoUrl = `https://www.youtube.com/embed/`

export default function Video(props) {
    const classes = useStyles();
    const video = props.videos && props.videos.legnth ? props.videos[0] : "" ;
    let requestUrl = `${videoUrl}${props.id}`;


    return(
        <Box className={classes.container}>
            <iframe title="" src={requestUrl} allow="autoplay" className={classes.video}></iframe>
            <Title>{ video ? video.snippet.title : "" }</Title>
        </Box>

    )
}