import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { accessTokenState } from './recoils';
import { useRouter } from 'next/router'

const LOGIN_USER = gql`
  mutation($email: String!, $password: String!){
    loginUser(email: $email, password: $password){
      accessToken
    }
  }
`

export default function index(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginUser] = useMutation(LOGIN_USER)
  const router = useRouter()

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  };
  // 1. 로그인 뮤테이션 날려서 access 토큰 받아오기
  const onClickLogin = async () => {
    try{
      const result = await loginUser({
        variables: { email, password },
      })
      const accessToken = result.data?.loginUser.accessToken
      console.log(accessToken);
      // 2. 받아온 accessToken을 globalState에 저장하기
      if(accessToken === undefined){
        alert("로그인에 실패했습니다! 다시 시도해 주세요!")
        return;
      }
      setAccessToken(accessToken);

      // 3. 로그인 성공 페이지로 이동하기
      await router.push('/pages/Login/tokens')
    } catch(error){
      if(error instanceof Error)
        alert(error.message);
    }
  };

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  )
}
