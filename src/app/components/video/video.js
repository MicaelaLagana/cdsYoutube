import React from 'react';
import { makeStyles } from "@material-ui/core";
import { Box } from '@mui/system';
import Title from '../title';

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    video: {
      display: "flex",
      flexDirection: "column",
      width: "600px"
    },
  });

  const videoUrl = `https://www.youtube.com/embed/`

  // https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCvVE9LIV1XnXhiBOf3_R1ISsn-LLW3lts&part=id&id=RG6O-Qq79G0 
  // Aca la url cambia tanto el search por videos como el part, que deja de ser snippet y pasa a ser id(porque el id del video se encuentra en esa parte)
export default function Video(props) {
    const classes = useStyles();
    const video = props.videos && props.videos.legnth ? props.videos[0] : "" ;
    let requestUrl = `${videoUrl}${props.id}`;
    

    return(
        <Box className={classes.video}>
            <iframe title="" src={requestUrl} allow="autoplay"></iframe>
            <Title>{ video ? video.snippet.title : "" }</Title>
        </Box>

    )
}