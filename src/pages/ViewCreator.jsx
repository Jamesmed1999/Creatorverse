import React from "react";
import { useState, useEffect } from 'react';
import {supabase } from "../client"
import { useParams } from "react-router-dom";
import '../Components/creator.css'

export const ViewCreator = () => {

    const [creator, setCreators] = useState([]);
    let params = useParams();
    let x,output;

    useEffect(() => {
      getCreators();
    }, []);
  
    async function getCreators() {
      const { data } = await supabase.from("ctable").select();
      {console.log("Called API")}
      setCreators(data);
      
    }
  
 const getIndex =  (num) =>
  {
    return creator.find(
      (creator) => creator.url === num
    );
  }

  if(creator.length === 0){
    output = "loading"
  }
  else{
    x = getIndex(params.viewId)
    output = <div className="creator-container">
             <img src={x.imageURL} alt="creator img" className="creator-img"></img>
        <h1 className="creator-name">{x.name}</h1>
        <p className="creator-about">{x.description}</p>
    </div>
  }
  
  

    return(
        <div>
            {output}
        </div>
        )
}