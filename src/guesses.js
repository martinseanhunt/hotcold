import React from 'react';

export default function Guesses(props) {
  const guesses = props.guesses.map((guess, i) => {
    return <li key={i}>{guess}</li>
  })

  return (
    <div>
      <span>Guesses so far: </span>
      <ul>
        {guesses}
      </ul>
    </div>
  )
}