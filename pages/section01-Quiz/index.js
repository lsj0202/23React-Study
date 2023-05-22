import * as S from './style'
import { useState } from 'react'

export default function Chat() {

  const [title, setTitle] = useState("Jony Ive");
  const [wtitle, setWtitle] = useState("Which of these images looks 'more correct'?");
  const [btn, setBtn] = useState("Click the correct image");
  const [bool, setBool] = useState(false);

  const submitBtn = () => {
    setTitle("Jony Ive");
    setWtitle("Visual bugs will be hiding in details");
    setBtn("Don't click the bad image");
    setBool(true);
  }
  return (
    <S.container>
      <S.profileContainer>
        <S.profileName>
          <S.circle/>
          <S.name bool={bool}>{title}</S.name>
        </S.profileName>
        <S.profileBody>
          <S.balloon>
            <S.title>
              {wtitle}
            </S.title>
          </S.balloon>
          <S.whiteBallon>
            <S.wTitle onClick={submitBtn}>
              {btn}
            </S.wTitle>
          </S.whiteBallon>
        </S.profileBody>
      </S.profileContainer>
    </S.container>
  )
}