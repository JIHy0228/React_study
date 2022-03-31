import useInput from "./useInput";

const Info = () => {
  const [state, onChange] = useInput({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>이름 : {name}</div>
        <div>닉네임 : {nickname}</div>
      </div>
    </div>
  );
};
export default Info;

/*
const Info = () => {
  const [name, setName] = useState();
  const [nickName, setNickName] = useState();
  
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => setNickName(e.target.value);

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickName} onChange={onChangeNickName} />
      </div>
      <div>
        <b>이름</b> : {name}
      </div>
      <div>
        <b>닉네임</b> : {nickName}
      </div>
    </div>
  );
};
export default Info;
*/
