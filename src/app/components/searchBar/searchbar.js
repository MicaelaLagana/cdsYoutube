import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Box, textAlign } from "@mui/system";
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { useContextCDS } from '../../context/provider';

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
  const {GetSearchThemeVideos} = useContextCDS();

    const handleEnter = (event) => {
      if (event.key === 'Enter') {
        GetSearchThemeVideos(search);
        setSearch("");
      }
    }

    function handleOnChange(event) {
      setSearch(event.target.value);
    }

    function handleClick(){
      GetSearchThemeVideos(search);
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
