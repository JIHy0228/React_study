import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate(); // 원하는 페이지로 이동시키는 것
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id :", id);

  const mode = searchParams.get("mode");
  console.log("mode :", mode);
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: "jihyeok" })}>
        QS 바꾸기
      </button>

      <button
        onClick={() => {
          navigate("home/"); // 원하는 경로 작성
        }}
      >
        Home으로 가기
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
