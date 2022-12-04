import React from "react";
import Links from "./Links"

function UserBio(props){
  console.log(props.bio)
  if (props.bio === '' || props.bio === undefined) {
    return null
  }else {
    return  <p>{props.bio}</p>
  }

} 

// function Links(props){
//   return <div>
//     <h3>Links</h3>
//     <a href={props.github}>{props.github}</a>
//     <a href={props.linkedin}>{props.linkedin}</a>
//   </div>
// }



function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <UserBio bio={props.bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}




export default About;
