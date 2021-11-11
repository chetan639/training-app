import { useEffect, useState } from "react";
import "./WatchFunction.css"

function WatchFunction(props){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1);
        },1000);
    })
    return (
    <>
        <h1>The value of Count is {count}</h1>
    </>
    );
}

function ColorButton(){
    const [color,setColor] = useState("Red");
    return (
        <>
            <h1>{color}</h1>
            <button onClick={()=>{setColor("Blue")}}>Blue</button>
            <button onClick={()=>{setColor("Pink")}}>Pink</button>
            <button onClick={()=>{setColor("Red")}}>Red</button>
        </>   
    );
}

export default ColorButton;