import { useState } from 'react';
import { randomQuotes } from './data';

export default function Quotes() {
  let [index, setIndex] = useState(0);

  function nextQuote() {
    if (index === randomQuotes.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  let randomQuote = randomQuotes[index];

  return (
    <>
      <div>{index}</div>
      <div>
        <p>{randomQuote.quote}</p>
        <p>{randomQuote.author}</p>
      </div>
      <div>
        <button onClick={nextQuote}>Next</button>
      </div>
    </>
  );
}
