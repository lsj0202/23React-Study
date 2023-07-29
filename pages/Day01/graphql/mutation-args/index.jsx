import { gql, useMutation } from "@apollo/client";

const 그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: "이", title: "맹구맹구맹구", contents: "맹9맹9맹9") {
      _id
    }
  }
`;

const GrapghqlMutationPage = () => {
  const [나의함수] = useMutation(그래프큐엘셋팅); // 나의함수 == axios.get

  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickSubmit}>Graphql-Api 요청하기2</button>
    </div>
  );
};

export default GrapghqlMutationPage;
