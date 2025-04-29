import { useRef, useState } from 'react';

export default function Player() {
  const input = useRef(null);
  const [playerName, setPlayerName] = useState('');

  function handleClick() {
    setPlayerName(input.current.value);
  }

  return (
    <section id='player'>
      <h2>Welcome {playerName ?? 'unknow entity'} </h2>
      <p>
        <input
          ref={input}
          type='text'
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
