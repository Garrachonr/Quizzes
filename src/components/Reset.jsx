import React from 'react';
import { LangContext } from "./App";
import { useContext } from "react";
import { Button } from 'react-bootstrap';

export default function Reset(props) {
  const lang = useContext(LangContext);
  function click() {
    props.resetClick();
  }

  return (
    <Button onClick={click} >
      {lang.dictionary["Reset"]}
    </Button>
  );

}