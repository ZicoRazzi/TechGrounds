import React from 'react';
import Home from '../pages/Home';
import CountButton from '../components/CountButton';

export default function Increment_Decrement() {
  return (
    <div>
      <Home />
      <h1>Increment &amp; Decrement</h1>

      <CountButton incrementBy={1} decrementBy={1} />
      <CountButton incrementBy={5} decrementBy={5} />
      <CountButton incrementBy={10} decrementBy={10} />
    </div>
  );
}
