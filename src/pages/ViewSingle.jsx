import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import {supabase } from "../client"
export const ViewSingle = ()=> {


/*
{creator.map((creators) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/view/${creators.url}`}
            key={creators.id}
          >
            {creators.name}
          </Link>
        ))}
*/
console.log("im here")
return(
    <div>
        
      
      <Outlet />
    </div>
)
}