import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Box, textAlign } from "@mui/system";
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const url = 'https://www.googleapis.com/youtube/v3/';
//Avisar lo de la quota
const key = 'AIzaSyDlhZN19kdPW6ugY0mru4VtvhKSw1O6Goc'
const requestUrl = `${url}search?part=snippet&key=${key}`;

const useStyle = makeStyles({
  searchbar: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    justifyItems: "center",
    padding: "10px",
  },
  search: {
    width: "80em",
    marginLeft: "20px",
    marginBottom: "20px",
    marginRight: "20px",
    marginTop: "20px",
    alignContent: "center"
  },
  button: {
    marginLeft: "20px",
    marginBottom: "20px",
    marginRight: "20px",
    marginTop: "20px",
    alignContent: "center"
  }
})


export default function Searchbar(props) {
  const classes = useStyle()
  const [search, setSearch] = useState('');


  async function GetSearchThemeVideos() {
    const QVideos =  `${requestUrl}&q=${search}`
    console.log(QVideos);
    await fetch(QVideos)
    .then(res => res.json())
    .then(
      data => {
        props.setVideos(data.items);
        props.setVideoID(data.items[0].id.videoId)
        props.setVideoTitle(data.items[0].snippet.title)
       console.log("id: ", data.items[0].id.videoId)
      }).catch((error) => {
        console.log("error: ", error)
      })
    }

    const handleEnter = (event) => {
      if (event.key === 'Enter') {
        GetSearchThemeVideos();
        setSearch("");
      }
    }

    function handleOnChange(event) {
      setSearch(event.target.value);
    }

    function handleClick(){
      GetSearchThemeVideos();
      setSearch("");
  }


  return (
    <Box className={classes.searchbar} >
          <TextField id="standard-basic" label="Search" variant="standard"  placeholder='video' value={search ? search : ""} onChange={handleOnChange}
          onKeyPress={handleEnter} className={classes.search}/> 
          <Button variant="contained" onClick={handleClick} className={classes.button}>Buscar</Button>
    </Box>
    );
  }
