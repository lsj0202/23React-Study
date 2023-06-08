import React from 'react'
import { useState } from 'react';

export default function index() {
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount(prev => prev + 1)
  }
  return (
    <div>
      <button onClick={onClickCountUp}>누르세여</button>
      {count}
    </div>
  )
}
