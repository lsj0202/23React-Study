import React from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BAORDED = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents ){
      _id
      number
      message
    }
  }
`

export default function GraphQL() {
  const [CREATE_BOARD] = useMutation(CREATE_BAORDED)

  const onClickSubmit = async () => {
    const result = await CREATE_BOARD({
      variables: {
        writer: '잇아진',
        title: '이사진',
        contents: '헬로'
      }
    })
    console.log(result)
  }

  return (
    <button onClick={onClickSubmit}>GQL-API 요청하기</button>
  )
}
