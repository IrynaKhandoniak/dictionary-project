import React from "react";

export default function Result(props) {
  if (!props.results || !props.results.word) {
    return null; // don’t render anything until we have results
  }

  return (
    <div className="Results">
      <h2>{props.results.word}</h2>

      {props.results.meanings && props.results.meanings.map((meaning, index) => (
        <div key={index}>
          <strong>{meaning.partOfSpeech}</strong>
          <ul>
            {meaning.definitions.map((def, i) => (
              <li key={i}>{def.definition}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
