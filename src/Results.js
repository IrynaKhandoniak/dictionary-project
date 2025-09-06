import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Results({ results }) {
  if (!results) return null;

  const phonetics = Array.isArray(results.phonetics) ? results.phonetics : [];
  const meanings  = Array.isArray(results.meanings)  ? results.meanings  : [];

  return (
    <div className="Results">
      <h2>{results.word}</h2>

      {phonetics.map((phonetic, index) => (
        <div key={index}>
          <Phonetic phonetic={phonetic} />
        </div>
      ))}

      {meanings.map((meaning, index) => (
        <div key={index}>
          <Meaning meaning={meaning} />
        </div>
      ))}
    </div>
  );
}
