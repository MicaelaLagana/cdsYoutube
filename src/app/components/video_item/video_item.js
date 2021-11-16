import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import VideoCard from "../videocard";

const useStyles = makeStyles({
  videoList: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      width: "300px"
  },
});

const VideoItem = (props) => {
  console.log("A ver: ", props.videos);
  const classes = useStyles();
  const listVideos = props.videos && props.videos.length ? props.videos : [] ;
  let reducedList = listVideos.slice(0, 4);
  reducedList.shift();

  return (
    <Box className={classes.videoList}>
      {reducedList.map(v => (<VideoCard video={v} onClick={props.onClick} setVideoTitle={props.setVideoTitle} setVideoID={props.setVideoID} counter={props.counter}/>))}
    </Box>
  );
}

export default VideoItem;


