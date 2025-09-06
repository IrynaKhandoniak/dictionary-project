import React from "react";

export default function Phonetic({ phonetic }) {
  const audio = phonetic?.audio;
  const text = phonetic?.text;

  if (!audio && !text) return null;

  return (
    <div className="Phonetic">
      {audio && (
        <>
          <a href={audio} target="_blank" rel="noopener noreferrer">
            Listen
          </a>
          <br />
        </>
      )}
      {text && <span>{text}</span>}
    </div>
  );
}
