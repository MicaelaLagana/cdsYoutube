import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';

const url = 'https://www.googleapis.com/youtube/v3/';
//Avisar lo de la quota
const key = 'AIzaSyDlhZN19kdPW6ugY0mru4VtvhKSw1O6Goc'
const requestUrl = `${url}search?part=snippet&key=${key}`;

export default function Searchbar(props) {
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
    <Box>
      <Box>
          <TextField id="standard-basic" label="Search" variant="standard"  placeholder='video' value={search ? search : ""} onChange={handleOnChange}
            sx={{
              mr: 3,
              ml: 3,
              width: 400
            }} onKeyPress={handleEnter}/> 
      </Box>
      <Box>
          <Button variant="contained" onClick={handleClick}>Buscar</Button>
      </Box>
    </Box>
    );
  }
