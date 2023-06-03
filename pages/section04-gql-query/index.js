import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number){
      number
      writer
    }
  }
`
// 옵셔널 체인징 ?.

export default function Routing() {
  const { data } = useQuery(FETCH_BOARD);

  console.log(data?.fetchProfile.name);
  return (
    <div>
      <div>게시글 등록완료</div>
      {data?.fetchProfile.name} 
    </div>
  )
}
