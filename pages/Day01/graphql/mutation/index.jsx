import { gql, useMutation } from "@apollo/client";

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

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: "고니",
        title: "안녕",
        contents: "반갑습니다",
      },
    });
    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickSubmit}>Graphql-Api 요청하기</button>
    </div>
  );
};

export default GrapghqlMutationPage;
