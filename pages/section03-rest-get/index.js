import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function index() {
  const [store, setStore] = useState('');
  const onClickAsync = () => {
    try{
      const result = axios.get('https://koreanjson.com/posts/1');
      console.log(result); // Promise
    } catch (err){
      alert(err);
    }
  };

  const onClickSync = async() => {
    try{
      const result = await axios.get('https://koreanjson.com/posts/1');
      console.log(result.data); // 제대로된 결과 => { title: "....",  }
      setStore(result.data.title);
    } catch (err){
      alert(err);
    }
  };

  return (
    <div>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>API 요청(동기)</button>
      <br/>
      {store}
    </div>
  )
}
