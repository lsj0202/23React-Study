import { useRouter } from "next/router";
import React from "react";

const StaticRouting = () => {
  const router = useRouter();

  const Routing01 = () => {
    router.push("/Day01/Routing/static-routing-moved01/1");
  };

  const Routing02 = () => {
    router.push("/Day01/Routing/static-routing-moved01/2");
  };

  const Routing03 = () => {
    router.push("/Day01/Routing/static-routing-moved01/3");
  };

  return (
    <div>
      <button onClick={Routing01}>1번 게시글로 이동</button>
      <button onClick={Routing02}>2번 게시글로 이동</button>
      <button onClick={Routing03}>3번 게시글로 이동</button>
    </div>
  );
};

export default StaticRouting;
