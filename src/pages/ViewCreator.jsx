import React from "react";
import { useState, useEffect } from 'react';
import {supabase } from "../client"
import { useParams, useNavigate } from "react-router-dom";
import '../Components/creator.css'

export const ViewCreator = () => {

    const [creator, setCreators] = useState([]);
    let params = useParams();
    let x,output;
    const navigate = useNavigate();

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
  x=getIndex(params.viewId);
  
  async function deleteCreator() {
    /*const { error } = await supabase
    .from('ctable')
    .delete()
    .eq('id', x.id)
    */
    navigate("..", { relative: "/edit" });
    //viewID is causing issues so I had to changed the redirect

}

  if(creator.length === 0){
    output = "loading"
  }
  else{
    console.log(x.id);
    output = <div className="creator-container">
             <img src={x.imageURL} alt="creator img" className="creator-img"></img>
        <h1 className="creator-name">{x.name}</h1>
        <p className="creator-about">{x.description}</p>
        <button className="creator-button" onClick={deleteCreator}>Delete creator</button>
    </div>
  }
  
  

    return(
        <div>
            {output}
        </div>
        )
}