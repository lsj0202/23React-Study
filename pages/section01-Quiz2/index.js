import * as S from './style'
import Image from 'next/image'
import Quiz from './images/Group.svg'
import g from "./images/Vector1.png"
import g1 from "./images/Vector2.png"
import g2 from "./images/Vector3.png"
import g3 from "./images/Vector4.png"

export default function index() {
  return (
    <S.container>
      <S.nav>
        <S.pic>
          <Image src={Quiz} alt="img" width={22} height={22}/>
        </S.pic>
      </S.nav>
      <S.profile>
        <S.mypage>
          마이페이지
        </S.mypage>
        <S.blue>
          <S.circle/>
          <S.name>이상진</S.name>
        </S.blue>
      </S.profile>
      <S.body>
        <S.text>공지사항</S.text>
        <S.text>이벤트</S.text>
        <S.text>FAQ</S.text>
        <S.text>QNA</S.text>
      </S.body>
      <S.section>
        <S.section2>
          <S.section3>
            <S.quiz>Q.01</S.quiz>
            <S.cont>리뷰 작성은 어떻게 하나요?</S.cont>
            <S.quiz>Q.02</S.quiz>
            <S.cont>리뷰 작성은 어떻게 하나요?</S.cont>
            <S.quiz>Q.03</S.quiz>
            <S.cont>리뷰 작성은 어떻게 하나요?</S.cont>
            <S.quiz>Q.04</S.quiz>
            <S.cont>리뷰 작성은 어떻게 하나요?</S.cont>
            <S.quiz>Q.05</S.quiz>
            <S.cont>리뷰 작성은 어떻게 하나요?</S.cont>
            <S.quiz>Q.06</S.quiz>
            <S.cont>리뷰 작성은 어떻게 하나요?</S.cont>
          </S.section3>
        </S.section2>
      </S.section>
      <S.footer>
        <Image src={g} alt="img" width={35} height={32}/>
        <Image src={g1} alt="img" width={35} height={32}/>
        <Image src={g2} alt="img" width={35} height={32}/>
        <Image src={g3} alt="img" width={35} height={32}/>
      </S.footer>
    </S.container>
  )
}