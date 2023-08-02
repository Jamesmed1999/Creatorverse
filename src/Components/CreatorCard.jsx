import React from "react";
import "./creator.css"
export const CreatorCard = ({name, description, imgLink}) => {
    const url = "";
    console.log(imgLink)
    return (<div className="creator-container">
        <img src={imgLink} alt="creator img" className="creator-img"></img>
        <h1 className="creator-name">{name}</h1>
        <p className="creator-about">{description}</p>
        


    </div>
    )
    //put view creator button in function and have it link to viewcreator component
}