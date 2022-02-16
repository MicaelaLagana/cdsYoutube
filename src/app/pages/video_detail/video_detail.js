import React, { useContext, useEffect } from 'react';
import ButtonNav from "../../components/button";
import { makeStyles } from '@mui/styles';
//import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { useContextCDS } from '../../context/provider';

const useStyle = makeStyles({
    container: {
        padding: "30px",
    },
    containerRow: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "100%",
        justifyContent: "center",
        justifyItems: "center",
        padding: "30px",
    },
    video: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "justify",
      justifyItems: "justify",
      margin: "2em",
    },
    text: {
        display: "flex",
        flexDirection: "column",
        padding: "2em"
    },
    title: {
        textAlign: "justify",
        fontSize: "30px",
        fontWeight: "bold",
        alignContent: "center",
        margin: "0px",
        padding: "1em"
    },
    button: {
        alignContent: "center",
        margin: "1em",
        padding: "1em"
    },
})

export default function VideoDetail() {
    const {title, description, thumbnails, GetVideoByID} = useContextCDS();
    const classes = useStyle();
    
    useEffect(() => {
        GetVideoByID();
    }, []); 


    return (
        <Box className={classes.container}>
            <h1 className={classes.title}>{title}</h1>
            <Box className={classes.containerRow}>
                <img src={thumbnails} alt="" className={classes.video}/> 
                <p className={classes.text}>{description}</p>
            </Box>
            <ButtonNav page={"/"} pageName={"Back"} className={classes.button}/>
        </Box>
    );
}