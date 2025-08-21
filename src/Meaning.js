import React from "react";
import Synonyms from "./Synonyms.js"

export default function Meaning(props) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
  
        <p className="definition">{props.meaning.definition}</p>
        <em className="example">{props.meaning.example}</em>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  }
  