import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {supabase } from "../client"

export const EditCreator = ({editmode, setEditMode,singleCreator,setSingleCreator}) => {
    let creatorData = singleCreator;

    const handleSubmit= (e)=> {
        e.preventDefault();
        addCreator(creatorData)
        alert("Edit Complete");
    }
    const handleInput= (e)=> {
        e.persist()
        setSingleCreator({...creatorData,[e.target.name]: e.target.value})
        console.log(creatorData)
        
    }
    async function addCreator(data) {
        /*
        const { error } = await supabase
        .from('ctable')
        .insert({ name: data.name,description: data.description, imageURL: data.url }) */
        console.log(data.name + " " + data.description + " " + data.imageURL + data.id)
       const { error } = await supabase
                .from('ctable')
                .update({ name: data.name,description: data.description, imageURL: data.imageURL })
  .             eq('id', data.id) 
  setEditMode(false)

    }
     
    return(
        <div>
<form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" defaultValue={creatorData.name} onChange={handleInput} />
      </div>
      <div>
        <label>About</label>
        <input type="text" name="description" value={creatorData.description} onChange={handleInput}/>
      </div>
      <div>
        <label>IMG</label>
        <input type="text" name="url" value={creatorData.url} onChange={handleInput}/>
      </div>
      <button type="submit">Submit form</button>
    </form>
        </div>
        )
}