import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
  const defs = Array.isArray(meaning?.definitions) ? meaning.definitions : [];

  return (
    <div className="Meaning">
      <h3>{meaning?.partOfSpeech}</h3>

      {defs.map((definition, index) => {
        const merged = [
          ...(meaning?.synonyms || []),
          ...(definition?.synonyms || []),
        ];
        const unique = [...new Set(merged)];

        return (
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

            {unique.length > 0 && (
              <>
                <strong>Synonyms</strong>
                <Synonyms synonyms={unique} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
