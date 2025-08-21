import React from "react";
import Meaning from "./Meaning.js"
import Phonetic from "./Phonetic.js"

export default function Results (props) {
    if (props.results) {
      return (
        <div className="Results"> 
          <h2>{props.results.word}</h2>
  
          {props.results?.phonetic && (
  <Phonetic phonetic={{ text: props.results.phonetic }} />
)}


          {props.results.meanings.map((meaning, index) => (
            <Meaning key={index} meaning={meaning} />
          ))}
        </div>
      )
    } else {
      return null;
    }
  }
  
  
