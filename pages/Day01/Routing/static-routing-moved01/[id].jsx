import React from "react";
import { useRouter } from "next/router";

const StaticRouting = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>이동완료 {id}</div>;
};

export default StaticRouting;
