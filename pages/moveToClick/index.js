import { useRouter } from 'next/router'
import React from 'react'

export default function index() {
  const router = useRouter();

  const gotoOne = () => {
    router.push('../section04-dynamic-routing/1');
  }
  const gotoTwo = () => {
    router.push('../section04-dynamic-routing/2');
  }
  const gotoThree = () => {
    router.push('../section04-dynamic-routing/3');
  }

  return (
    <div>
      <button onClick={gotoOne}>1 페이지로 이동~</button>
      <button onClick={gotoTwo}>2 페이지로 이동~</button>
      <button onClick={gotoThree}>3 페이지로 이동~</button>
    </div>
  )
}
