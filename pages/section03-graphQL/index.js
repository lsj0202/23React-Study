import React from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BAORDED = gql`
  mutation{
    createBoard(writer: "뚱이", title: "비키니 시티", contents: "집게리아" ){
      _id
      number
      message
    }
  }
`

export default function GraphQL() {
  const [CREATE_BOARD] = useMutation(CREATE_BAORDED)

  const onClickSubmit = async () => {
    const result = await CREATE_BOARD()
    console.log(result)
  }

  return (
    <button onClick={onClickSubmit}>GQL-API 요청하기</button>
  )
}
