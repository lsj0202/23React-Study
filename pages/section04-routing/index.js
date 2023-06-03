import { useRouter } from "next/router"

export default function Routing() {
  const router = useRouter()

  const onClickRouter = () => {
    router.push('../section03-rest-get')
  }

  return (
    <div>
      <button onClick={onClickRouter}>페이지 이동</button>
    </div>
  )
}
