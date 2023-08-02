
import React, { useState, useEffect } from 'react';
import {supabase } from "./client"
import {CreatorCard} from './Components/CreatorCard'



export default function App() {
  const [creator, setCreators] = useState([]);

  useEffect(() => {
    getCreators();
  }, []);

  async function getCreators() {
    const { data } = await supabase.from("ctable").select();
    setCreators(data);
  }


  return (
    <div>
    
      {creator.map((creators) => (
          <CreatorCard key={creators.id}name={creators.name} description={creators.description} imgLink={creators.imageURL}/>
        ))}
      
      
    </div>
  );
}