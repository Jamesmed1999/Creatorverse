import React from "react";
import "./creator.css"
import { Link} from "react-router-dom";
export const CreatorCard = ({name, description, imgLink, url, id}) => {
    


    return (<div className="creator-container">
        <img src={imgLink} alt="creator img" className="creator-img"></img>
        <h1 className="creator-name">{name}</h1>
        <p className="creator-about">{description}</p>
        
        <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/view/${url}`}
            key={id}
          > <button className="creator-button">View</button>
            </Link>
            
         
        
        
  


    </div>
    )
    //put view  creator button in function and have it link to viewcreator component
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
}