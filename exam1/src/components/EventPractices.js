import { useRef, useState } from "react";

const EventPractiecs = () => {
  const ref = useRef(null);
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  //   const [username, setUsername] = useState();
  //   const [message, setMessage] = useState();

  //   const onChangeUsername = (e) => setUsername(e.target.value);
  //   const onChangeMessage = (e) => setMessage(e.target.value);

  const onClick = () => {
    ref.current.focus();
    alert(username + ":" + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChange} ref={ref} />
      <input type="text" name="message" placeholder="아무거나 입력하세요" value={message} onChange={onChange} onKeyPress={onKeyPress} />

      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractiecs;
