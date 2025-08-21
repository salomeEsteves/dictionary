import React from "react";
import Synonyms from "./Synonyms.js"
import "./Synonyms.css"
import "./Meaning.css"

export default function Meaning(props) {
    return (
      <div className="Meaning">
        <section>
        <h3>{props.meaning.partOfSpeech}</h3>
  
        <p className="definition">{props.meaning.definition}</p>
        <p className="example"><em>{props.meaning.example}</em></p>
        <Synonyms synonyms={props.meaning.synonyms} />
        </section>
      </div>
    );
  }
  