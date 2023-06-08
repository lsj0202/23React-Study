import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router';
import React from 'react'

const FETCH_BOARD = gql`
  query{
    fetchBoards{
      number
      writer
      title
      contents
    }
  }
`

export default function index() {
  const { data } = useQuery(FETCH_BOARD);

  console.log(data);
  return (
    <div>
      {data?.fetchBoards.map((data) => (
        <div key={data.number}>
          <div>작성자: {data.writer}</div>
          <div>제목: {data.title}</div>
          <div>내용: {data.contents}</div>
        </div>
      ))}
    </div>
  )
}
