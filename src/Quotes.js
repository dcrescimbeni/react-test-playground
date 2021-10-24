import { useState } from 'react';
import { randomQuotes } from './data';

export default function Quotes() {
  let [index, setIndex] = useState(0);

  function nextQuote() {
    setIndex(index++);
  }

  let randomQuote = randomQuotes[index];

  return (
    <div>
      <p>{randomQuote.quote}</p>
      <p>{randomQuote.author}</p>
    </div>
  );
}
