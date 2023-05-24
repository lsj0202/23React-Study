import styled from '@emotion/styled'

export const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px red solid;
  display: flex;
  align-items: center;
  justify-content: center;
  .appContentWrap{
    transform: translate(-50%, -50%);
    position: absolute;
    border: 1px blue solid;
    padding: 20px;
  }
`
export const ResultWrap = styled.div`
  margin-top: 60px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
`