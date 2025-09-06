import React from "react";

export default function Synonyms({ synonyms }) {
  const list = Array.isArray(synonyms) ? [...new Set(synonyms)] : [];
  if (list.length === 0) return null;

  return (
    <ul className="Synonyms">
      {list.map((s, i) => <li key={i}>{s}</li>)}
    </ul>
  );
}

