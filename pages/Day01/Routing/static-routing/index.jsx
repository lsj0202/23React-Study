import { useRouter } from "next/router";
import React from "react";

const StaticRouting = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("/Day01/Routing/static-routing-moved");
        }}
      >
        이동하기 버튼
      </button>
    </div>
  );
};

export default StaticRouting;
