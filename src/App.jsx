
import React, { useState, useEffect } from 'react';
import {supabase } from "./client"
import {CreatorCard} from './Components/CreatorCard'



export default function App() {
  const [creator, setCreators] = useState([]);

  useEffect(() => {
    getCreators();
  }, []);

  async function getCreators() {
    const { data } = await supabase.from("ctable").select().order('id', { ascending: true });
    {console.log("Called API")}
    setCreators(data);
  }


  return (
    <div>
      {console.log(creator)}
      {creator.map((creators) => (
          <CreatorCard key={creators.id}name={creators.name} description={creators.description} imgLink={creators.imageURL} url={creators.url} id={creators.id}/>
        ))}
      
      
    </div>
  );
}