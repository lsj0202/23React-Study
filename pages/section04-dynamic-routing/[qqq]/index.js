import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router';
import React from 'react'

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number){
      number
      writer
      title
      contents
    }
  }
`

export default function index() {
  const router = useRouter();
  console.log(router);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.qqq)
    }
  });

  console.log(data);
  return (
    <div>
      <h1>{data?.fetchBoard.number}번 게시글로 이동이 완료되었습니다.</h1>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
    </div>
  )
}
