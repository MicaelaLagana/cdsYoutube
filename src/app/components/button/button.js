import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function ButtonNav(props) {
return (
  <>
    <Link to={props.page}>
      <Button variant="contained" >{props.pageName}</Button>     
    </Link>    
  </>
  );
}
