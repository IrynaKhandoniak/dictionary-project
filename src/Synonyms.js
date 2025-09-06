import React from "react";

export default function Synonyms({ synonyms }) {
  // If there are no synonyms, render nothing
  if (!synonyms || synonyms.length === 0) {
    return null;
  }

  return (
    <ul className="Synonyms">
      {synonyms.map((synonym, index) => (
        <li key={index}>{synonym}</li>
      ))}
    </ul>
  );
}
