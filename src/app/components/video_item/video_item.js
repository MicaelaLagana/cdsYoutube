import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import VideoCard from "../videocard";
import { useContextCDS } from "../../context/provider";

const useStyles = makeStyles({
  videoList: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      width: "300px"
  },
});

const VideoItem = (props) => {
  const {videos} = useContextCDS();
  const classes = useStyles();

  return (
    <Box className={classes.videoList}>
      {videos.map(v => (<VideoCard video={v}/>))}
    </Box>
  );
}

export default VideoItem;


