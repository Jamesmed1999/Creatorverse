import React from "react";
import { useState, useEffect , Link} from 'react';
import {supabase } from "../client"
import { useParams, useNavigate } from "react-router-dom";
import { EditCreator } from "./EditCreator";

import '../Components/creator.css'

export const ViewCreator = () => {

    const [creator, setCreators] = useState([]);
    const [singleCreator, setSingleCreator] = useState([]);
    const [editmode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
    let params = useParams();
    let output = <a href="#" aria-busy="true" className="Load">Loading...</a>
   

    useEffect(() => {
      getCreators();
    }, [loading]);
    const getSingleCreator =  (num) =>
    {
      return creator.find(
        (creator) => creator.url === num
      );
    }
    async function getCreators() {
      const { data } = await supabase.from("ctable").select();
      {console.log(data + " view")}
      setCreators(data);
     
     const dataSingle = getSingleCreator(params.viewId)
     
     setSingleCreator(dataSingle)
     setLoading(false)
     
    }
    
  const toggleEdit = () => {
    setEditMode(!editmode)
  }

  
  async function deleteCreator() {
    let answer = window.confirm("Are you Sure you want to Delete?");
    
    if (answer === true) {
    const { error } = await supabase
    .from('ctable')
    .delete()
    .eq('id', singleCreator.id)
    console.log("I am here")
    navigate("..", { relative: "/" });
    }

}

if(editmode === true)
{
  output = <EditCreator editmode={editmode} setEditMode={setEditMode} singleCreator={singleCreator} setSingleCreator={setSingleCreator}/>
}

 else if(typeof singleCreator !== 'undefined' && loading === false) {
    output = <div >
      
      <main class ="container">
      <article className="creator-article">
             <center><img src={singleCreator.imageURL} alt="creator img" ></img> 
             
        <h1>{singleCreator.name}</h1> </center>
        <p >{singleCreator.description}</p>
        <a href={singleCreator.Slink} >Check Me Out!</a></article>
        
        </main>
    </div>
    
  }



    return(
        <div >
          <div className="creator-button-box">
          <button className="creator-button-edit" disabled={loading === true} onClick={toggleEdit}>Edit</button>
          <button className="creator-button-delete" disabled={loading === true} onClick={deleteCreator}>Delete creator</button>
          </div>
            {output}
            

        </div>
        )
}