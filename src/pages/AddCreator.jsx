import React from "react";
import { useNavigate  } from "react-router-dom";
import  { useState } from 'react';
import {supabase } from "../client"
export const AddCreator = () => {

const [creatorf, setCreatorf] = useState ({
    name:'',
    description:'',
    url:'',
})
const navigate = useNavigate();

    const handleSubmit= (e)=> {
        
        e.preventDefault();
        const data = {
            name: creatorf.name,
            description: creatorf.description,
            url: creatorf.url,
        }
        console.log(data.name)
        //addCreator(data)
        alert("Welcosme:" + data.name + " to creatorverse!");
        navigate("..", { relative: "/" });
    }
    const handleInput= (e)=> {
       
        e.persist()
        setCreatorf({...creatorf,[e.target.name]: e.target.value})
        console.log(creatorf)
        
    }
    async function addCreator(data) {
        const { error } = await supabase
        .from('ctable')
        .insert({ name: data.name,description: data.description, imageURL: data.url })

    }


    return(
    <div>
<form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={creatorf.name} onChange={handleInput} />
      </div>
      <div>
        <label>About</label>
        <input type="text" name="description" value={creatorf.description} onChange={handleInput}/>
      </div>
      <div>
        <label>IMG</label>
        <input type="text" name="url" value={creatorf.url} onChange={handleInput}/>
      </div>
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>

    </form>
    </div>
    )
}