import React from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BAORDED = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(seller: $seller, createProductInput: $createProductInput){
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
        seller: "뚱이",
        createProductInput: {
          name: "뚱쓰",
          detail: "뚱이 잠잘래",
          price: 3000
        }
      }
    })
    console.log(result)
  }

  return (
    <button onClick={onClickSubmit}>GQL-API 요청하기</button>
  )
}
