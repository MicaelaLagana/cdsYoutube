import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";

export default function VideoCard(props) {
    const {video} = props;

    return(
        <Box onClick={() => props.onClick(video.id.videoId)}>
            <img src={video.snippet.thumbnails.default.url} alt=""/>
            <Box>
                <p>{video.snippet.title}</p>
                <p>{video.snippet.channelTitle}</p>
            </Box>
        </Box>
    );
} 