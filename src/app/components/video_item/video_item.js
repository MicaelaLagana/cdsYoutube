import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import PropTypes from 'prop-types';
import VideoCard from "../videocard";



const useStyles = makeStyles({
  video: {
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

  return (
    <Box>
    <div className={classes.video}>
      {listVideos.map(v => (<VideoCard video={v} onClick={props.onClick}/>))}
    </div>
    </Box>
  );
}

//Estaba pisandos los videos que vienen por props, así que voy a dejarlo comentado, no olvidarme de preguntar
// VideoItem.defaultProps ={
//   videos: [],
// }

VideoItem.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.title,
    author: PropTypes.author,
    imageUrl: PropTypes.string,
  })).isRequired,
} 

export default VideoItem;


