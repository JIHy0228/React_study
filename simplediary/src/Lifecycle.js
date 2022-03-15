import React, {useEffect, useState} from "react";

const UnmountTest = () => {

    useEffect(()=>{
        //Mount 시점 제어
        console.log("Mount");

        //UnMount 시점 제어 retrun 함수만들어줌
        return ()=>{
            //Unmount 시점에 실행하게 됨
            console.log("Unmount!");
        }
    },[])

    return <div>Unmount Testing Component</div>
}

const Lifecycle = ()=>{

    /*
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    /*Lifecycle의 Mount 순간 제어
        컴포넌트의 탄생 순간을 제어하기 떄문에 업데이트 순간은 제어 x
    useEffect(()=>{
        console.log("Mount!");
    },[]);

    /*Lifecycle의 Update 순간 제어
       [] 빈배열, 즉 dependency를 전달하지 않으면 됨
    useEffect(()=>{
        console.log("update");
    })

    /*useEffect의 특별한 제어 방법
    dependency array를 감지하고 싶은 값이 변하는 순간을 제어하고 싶은경우  아래의 콜백함수처럼 사용가능 함
    useEffect(()=>{
        console.log(`count is update : ${count}`);
        if(count > 5) {
            alert("5를 넘으면 안돼!! 1로 초기화 할꺼야 ");
            setCount(1);
        }
    },[count]);

    useEffect(()=>{
        console.log(`text is update : ${text}`);
    },[text]);
    */

    // unMount 상태
    
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => setIsVisible(!isVisible);

    return (
    <div style={{padding:20}}>
        {/* 
        <div>
            {count}
            <button onClick={()=>{setCount(count+1)}}>+</button>
        </div>

        <div>
        <input value={text} onChange={(e)=> setText(e.target.value )} />
        </div>
        */}
        <button onClick={toggle}>ON/OFF</button>
        {isVisible && <UnmountTest />}
    </div>
    );
};

export default Lifecycle;