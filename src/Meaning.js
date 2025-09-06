import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>

      {meaning.definitions?.map((definition, index) => (
        <div key={index}>
          <p>
            <strong>Definition:</strong> {definition.definition}
            {definition.example && (
              <>
                <br />
                <strong>Example:</strong> <em>{definition.example}</em>
              </>
            )}
          </p>

          {definition.synonyms?.length > 0 && (
            <>
              <strong>Synonyms</strong>
              <Synonyms synonyms={definition.synonyms} />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
