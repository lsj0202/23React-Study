import axios from "axios";

const index = () => {
  const 비동기 = () => {
    const data = axios.get("https://koreanjson.com/posts/1");
    console.log(data);
  };

  const 동기 = async () => {
    const data = await axios.get("https://koreanjson.com/posts");
    console.log(data.data[0].title);
  };

  return (
    <div>
      <button onClick={비동기}>비동기</button>
      <button onClick={동기}>동기</button>
    </div>
  );
};

export default index;
