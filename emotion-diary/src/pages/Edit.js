import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const [originData, setOriginData] = useState();

  const navigate = useNavigate(); // 원하는 페이지로 이동시키는 것
  const { id } = useParams();

  const diaryList = useContext(DiaryStateContext);

  /* diarylist가 mounte 됐을 때 수정 하기 위해 useEffect사용 */
  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((it) => parseInt(it.id) === parseInt(id));
      console.log(targetDiary);

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace: true });
        /*
        replace : true <- 뒤로가기를 못하게 막음
        없는 일기를 수정할때 수정 페이지가 나오지 않고 메인으로
        */
      }
    }
  }, [id, diaryList]);
  return <div>{originData && <DiaryEditor isEdit={true} originData={originData} />}</div>;
};

export default Edit;
