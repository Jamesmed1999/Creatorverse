import React from "react";
import { useNavigate  } from "react-router-dom";
import  { useState } from 'react';
import {supabase } from "../client"
import "./newcss.css"
export const AddCreator = () => {

const [creatorf, setCreatorf] = useState ({
    name:'',
    description:'',
    url:'',
    slink:'',
})
const navigate = useNavigate();

    const handleSubmit= (e)=> {
        
        e.preventDefault();
        const data = {
            name: creatorf.name,
            description: creatorf.description,
            url: creatorf.url,
            slink: creatorf.slink,
        }
        console.log(data.name)
        addCreator(data)
        alert("Welcome to the Creatorverse " + data.name + " !");
        
    }
    const handleInput= (e)=> {
       
        e.persist()
        setCreatorf({...creatorf,[e.target.name]: e.target.value})
        console.log(creatorf)
        
    }
    async function addCreator(data) {
        const { error } = await supabase
        .from('ctable')
        .insert({ name: data.name,description: data.description, imageURL: data.url, Slink: data.slink })
        navigate("..", { relative: "/" });
    }


    return(
    <div>
      <article class='grid'>
<form onSubmit={handleSubmit}>
  <div>

      
        <label>Name</label>
        <input type="text" name="name" defaultValue={creatorf.name} onChange={handleInput} />
      
      
        <label>About</label>
        <input type="text" name="description" value={creatorf.description} onChange={handleInput}/>
      
      
        <label>IMG</label>
        <input type="text" name="url" value={creatorf.url} onChange={handleInput}/>
    
        <label>Social Link</label>
        <input type="text" name="slink" value={creatorf.slink} onChange={handleInput}/>
     
      <button type="submit" className="btn-add">Join Now</button>
      </div>
    </form>
    </article>
    </div>
  
    )
}