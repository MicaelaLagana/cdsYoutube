import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, margin } from "@mui/system";

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
    const {video} = props;

    function handleOnClick() {
        props.onClick(video.id.videoId);
        props.setVideoTitle(video.snippet.title);
    }

    return(
        <Box onClick={handleOnClick} className={classes.card}>
            <img src={video.snippet.thumbnails.default.url} alt=""/>
            <Box className={classes.text}>
                <p className={classes.title}>{video.snippet.title}</p>
                <p className={classes.author}>{video.snippet.channelTitle}</p>
            </Box>
        </Box>
    );
} 