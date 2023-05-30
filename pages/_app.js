import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: 'http://practice.codebootcamp.co.kr/graphql', // 한 번 받아온 것을 저장함
    cache: new InMemoryCache() // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
  })

  return (
    <div>
      <div>===================여기는 _app.js 컴포넌트 입니다. ====================</div>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
    <div>===================여기는 _app.js 마지막부분 입니다. ====================</div>
    </div>
  )
}
