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
    setCreators(data);
    console.log(supabase)
  }


  return (
    <div className='main-div'>
      {console.log(creator)}
      {creator.map((creators) => (
          <CreatorCard key={creators.id}
          name={creators.name} 
          description={creators.description} 
          imgLink={creators.imageURL} 
          url={creators.url} 
          id={creators.id}
          Slink={creators.Slink}/>
        ))}
      
      
    </div>
  );
}