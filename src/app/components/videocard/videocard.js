import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import { useContextCDS } from '../../context/provider';

const useStyles = makeStyles({
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: "200px"
    },
    text: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        textAlign: "justify",
        fontSize: "14px",
        fontWeight: "bold",
        margin: "0px"
    },
    author: {
        textAlign: "justify",
        fontSize: "12px",
        fontWeight: "muted",
    }
  });

export default function VideoCard(props) {
    const classes = useStyles();
    const {handleVideoOnClick} = useContextCDS();
    const {video} = props;
    const  videoSnippetPath = `${video.snippet}`
    const videoIDPath = `${video.id.videoId}`

    console.log("video en videocard: " + props.video);



    return(
        <Box onClick={handleVideoOnClick(videoSnippetPath.title, videoIDPath)} className={classes.card}>
            {/* <img src={videoSnippetPath.thumbnails.standard.url} alt=""/> */}
            <Box className={classes.text}>
                <p className={classes.title}>{videoSnippetPath.title}</p>
                <p className={classes.author}>{videoSnippetPath.channelTitle}</p>
            </Box>
        </Box>
    );
} 