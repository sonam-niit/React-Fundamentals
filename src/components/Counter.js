import React, { useEffect, useState } from 'react';
function Counter() {
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);//when you change the state its not changing on the spot
    }
    const decrement=()=>{
        if(count<=0){
            alert("Count cannot be decrease after 0.. ")
        }else{
            setCount(count-1);
        }
    }
    useEffect(()=>{
        console.log(count);
    },[count])
    //2 parameters 1(function) 2 (dependency)
    //when the count state is getting update execute this useEffect Hook
    return ( <div>
        <h3>Counter Component</h3>
        <h4>Count {count}</h4>
        <button onClick={increment}>+</button> <button onClick={decrement}>-</button>
    </div> );
}

export default Counter;