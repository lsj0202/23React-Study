import styled from '@emotion/styled'

export const container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
`
export const profileContainer = styled.div`
  width: 380px;
  height: 30vh;
  background-color: white;
  border-radius: 10px;
  margin-top: 50px;
`
export const profileName = styled.div`
  width: 380px;
  height: 70px;
  border-bottom: 2px solid silver;
  display: flex;
  align-items: center;
`
export const circle = styled.div`
  background-color: gray;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
`
export const name = styled.div`
  margin-left: 10px;
  color: ${(props) => props.bool ? "green" : "red" };
`
export const profileBody = styled.div`
  width: 380px;
  height: calc(90% - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const balloon = styled.div`
  background-color: #009FEE;
  width: 250px;
  height: 60px;
  border-radius: 15px 2px 15px 15px;  
  margin: 15px 0 10px 120px;
  display: flex;
  align-items: center;
`

export const title = styled.div`
  color: white;
  margin-left: 10px;
`
export const whiteBallon = styled.div`
  background-color: #dee2e6;
  width: 200px;
  height: 35px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 5px 0 0 10px;
  &:hover{
    cursor: pointer;
  }
`
export const wTitle = styled.div`
  color: black;
  margin-left : 10px;
`