import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  /* 페이지 타이틀 변경 코드 */
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - 새 일기`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
