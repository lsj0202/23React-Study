import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const 그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
// GQL에서 $는 변수를 뜻한다.

const GrapghqlMutationPage = () => {
  const [나의함수] = useMutation(그래프큐엘셋팅); // 나의함수 == axios.get
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer,
        title,
        contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  return (
    <div>
      작성자: <input type="text" onChange={onChangeWriter} />
      제목: <input type="text" onChange={onChangeTitle} />
      내용: <input type="text" onChange={onChangeContents} />
      <button onClick={onClickSubmit}>Graphql-Api 요청하기</button>
    </div>
  );
};

export default GrapghqlMutationPage;
