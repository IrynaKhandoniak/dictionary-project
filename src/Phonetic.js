export default function Phonetic({ phonetic }) {
  if (!phonetic?.audio) return null;
  return (
    <a href={phonetic.audio} target="_blank" rel="noopener noreferrer">
      Listen
    </a>
  );
}
