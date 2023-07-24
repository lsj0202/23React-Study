import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const index = () => {
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: {
      page: 1,
    },
  });

  const [startPage, setStartPage] = useState(1);

  const onClickPrevPage = () => {
    setStartPage((prev) => prev - 10);
  };
  // 다음 페이지 클릭 시 실행할 함수
  const onClickNextPage = () => {
    setStartPage((prev) => prev + 10);
  };

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  return (
    <>
      <h1>페이지네이션 연습 !!!</h1>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          {el.title} {el.writer}
        </div>
      ))}

      <span onClick={onClickPrevPage}>이전페이지 |</span>

      {Array(10)
        .fill(1)
        .map(
          (
            _,
            index // 길이가 10이고 모든 요소가 1로 채워짐
          ) => (
            <span
              onClick={onClickPage}
              id={String(index + startPage)}
              key={index + startPage}
            >
              {` ${index + startPage} `}
            </span>
          )
        )}

      <span onClick={onClickNextPage}> 다음페이지</span>
    </>
  );
};

export default index;
