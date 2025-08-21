import React from "react";

export default function Synonyms(props) {
    if (props.synonyms && props.synonyms.length > 0) {
      return (
        <ul className="Synonyms">
            <strong>Similar words: </strong>
          {props.synonyms.map((synonym, index) => (
            <li key={index}>{synonym}</li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  }
  