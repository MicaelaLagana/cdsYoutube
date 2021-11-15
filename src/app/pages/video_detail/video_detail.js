import React, { useState, useEffect } from "react";
import ButtonNav from "../../components/button";


export default function VideoDetail() { 
    return (
    <>
        {/* <img src={video.snippet.thumbnails.default.url} alt=""/> */}
        {/* <h1>{video.snippet.title}</h1>
        <h1>{video.snippet.description}</h1> */}
            <ButtonNav page={"/"} pageName={"Back"} />
    </>
    );
}