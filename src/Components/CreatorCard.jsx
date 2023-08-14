import React from "react";
//import "./creator.css"
import { Link} from "react-router-dom";
export const CreatorCard = ({name, description, imgLink, url, id, Slink}) => {
    


    return (<div className="creator-container">
      <main class="container">
        <center>
        <article className="creator-article">
        <img src={imgLink} alt="creator img" className="creator-img"></img> 
        <h1 className="creator-name">{name}</h1>
        <body><p className="creator-about">{description}</p>
        
        </body>
       
        
        <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/view/${url}`}
            key={id}
          > <button className="creator-button" role="button"  >View</button>
            </Link>
            <a href={Slink}>Social Link:  {" " + Slink}</a>
            </article>
            </center>
            
        </main>
         
        
        
  


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