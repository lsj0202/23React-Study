import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;
// GQL에서 $는 변수를 뜻한다.

const GrapghqlMutationPage = () => {
  const [createProduct] = useMutation(CREATE_PRODUCT); // 나의함수 == axios.get

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "사쿠라",
        createProductInput: {
          name: "아이돌",
          detail: "멋진 아이돌",
          price: 100000,
        },
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
