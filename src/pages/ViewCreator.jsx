import React from "react";
import { useState, useEffect } from 'react';
import {supabase } from "../client"

export const ViewCreator = () => {

    const [creator, setCreators] = useState([]);
    const [display, setDisplay] = useState(false);

  useEffect(() => {
    getCreators();
  }, []);

  async function getCreators() {
    const { data } = await supabase.from("ctable").select("id");
    setCreators(data);
    setDisplay(true);
  }
  if(display)
  {
    console.log(creator)

  }
    return(
        <h1>View</h1>
        )
}