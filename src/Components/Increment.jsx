import React,{useState} from "react";

function Increase (){
    const [count,setCount]=useState(0)
    const Increment = ()=>{
        setCount(count + 1 )
    }
    const Decrement = ()=>{
        setCount(count - 1 )
    }
    const Multiply = ()=>{
        setCount(count * 2 )
    }
    const Divide = ()=>{
        setCount(count / 2 )
    }

    return(
        <>
        <h1>Number == {count}</h1>
        <button onClick={()=>Increment()}>Increment</button>
        <button onClick={()=>Decrement()}>Decrement</button>
        <button onClick={()=>Multiply()}>square</button>
        <button onClick={()=>Divide()}>Divide</button>

        </>
    )
}

export default Increase;