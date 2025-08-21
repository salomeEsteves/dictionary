import React from "react";
import Meaning from "./Meaning.js"
import Phonetic from "./Phonetic.js"
import "./Results.css"

export default function Results (props) {
    if (props.results) {
      return (
        <div className="Results"> 
        <section>
          <h2>{props.results.word}</h2>
  
          {props.results?.phonetic && (
  <Phonetic phonetic={{ text: props.results.phonetic }} />
)}
</section>

          {props.results.meanings.map((meaning, index) => (
            <Meaning key={index} meaning={meaning} />
          ))}
        </div>
        
      )
    } else {
      return null;
    }
  }
  
  
