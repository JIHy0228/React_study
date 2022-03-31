import "./App.css";
import { useState } from "react";

import EventPractiecs from "./components/EventPractices";
import IterationSample from "./components/IterationSample";
import Say from "./components/Say";
import Info from "./components/Info";
import Modal from "./components/Modal";
import Counter from "./components/Counter";
import Average from "./components/Average";

function App() {
  /* modal 예제 */
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  /*modal 종료*/

  /* Info.js 가시성 예제 */
  const [visible, setVisible] = useState(false);
  const InfoVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="App">
      <Say />
      <EventPractiecs />
      <IterationSample />
      {/* useEffect 가시성 */}
      <div>
        <button onClick={InfoVisible}>{visible ? "숨기기" : "보이기"}</button>
        <hr />
        {visible && <Info />}
      </div>
      {/* modal 구현부 */}
      <div className="Modal">
        <button onClick={openModal}>모달팝업</button>
      </div>
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
      </Modal>

      <Counter />
      <Average />
    </div>
  );
}

export default App;
