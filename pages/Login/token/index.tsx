import { useQuery, gql } from "@apollo/client"

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn(
      email
      name
  }
`

export default function index() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return (

    <div>{data?.fetchUserLoggedIn.name}</div>
  )
}
