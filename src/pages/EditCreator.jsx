import React from "react";
import {supabase } from "../client"
import "./newcss.css"
export const EditCreator = ({editmode, setEditMode,singleCreator,setSingleCreator}) => {
    let creatorData = singleCreator;
console.log(editmode)
    const handleSubmit= (e)=> {
        
        
        
        addCreator(creatorData)
        alert("Edit Complete")
        
    }
    const handleInput= (e)=> {
        e.persist()
        setSingleCreator({...creatorData,[e.target.name]: e.target.value})
        console.log(creatorData)
        
    }
    async function addCreator(data) {
 
        
        console.log(editmode)
       const { error } = await supabase
                .from('ctable')
                .update({ name: data.name,description: data.description, imageURL: data.imageURL, Slink: data.Slink })
                .eq('id', data.id) 
        setEditMode(false)

    }
    const cancleEdit = () => {
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
        <input type="text" name="imageURL" value={creatorData.imageURL} onChange={handleInput}/>
      </div>
      <div>
        <label>Social Link</label>
        <input type="text" name="Slink" value={creatorData.Slink} onChange={handleInput}/>
      </div>
      <button type="submit">Submit Edit</button>
    </form>
        </div>
        )
}