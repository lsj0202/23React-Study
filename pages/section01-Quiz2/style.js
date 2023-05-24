import styled from '@emotion/styled'

export const container = styled.div`
  width: 640px;
  height: 100vh;
  background-color: #d3d3d3;
  margin: 0 auto;
`;

export const nav = styled.div`
  width: 640px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const pic = styled.div`
  margin-right: 50px;
`
export const profile = styled.div`
  width: 640px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  gap: 250px;
`
export const mypage = styled.h2`
  font-weight: 400;
`
export const blue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const circle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: gray;
`
export const name = styled.div`
  margin-left: 10px;
`
export const body = styled.div`
  width: 640px;
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
`
export const text = styled.h2`
  margin-left: 50px;
  font-weight: 500;
  color: gray;
  &:hover{
    color: #FF1B6D;
    text-decoration: underline;
    cursor: pointer;
  }
`
export const section = styled.div`
  width: 640px;
  height: 500px;
`
export const section2 = styled.div`
  width: 540px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
export const section3 = styled.div`
  width: 540px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
export const quiz = styled.span`
  margin-top: 30px;
  color: gray;
`
export const cont = styled.span`
  color: black;
`
export const footer = styled.div`
  height: 60px;
  border-top: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`