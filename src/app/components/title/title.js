import React from 'react';
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';

export default function Title(props) {
    console.log("titulo: ", props)
    return (
        <Box>
            <h1>{props.title}</h1>
        </Box>
    )
}