
import React from "react";
import profile from "./assets/profile.png"
function Card(){
  
   return(

    <div className="card">
        <img src={profile} alt="Profile Picture" />
        <h2 className="name">Anil</h2>
        <p>Im searching for job</p>
    </div>



   );

}

export default Card;