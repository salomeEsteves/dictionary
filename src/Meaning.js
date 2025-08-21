import React from "react";
import Synonyms from "./Synonyms.js"

export default function Meaning(props) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
  
        <p className="definition">{props.meaning.definition}</p>
        <Synonyms synonyms={props.meaning.synonyms} />
        <p className="example"> Example: <em>{props.meaning.example}</em></p>
        
      </div>
    );
  }
  