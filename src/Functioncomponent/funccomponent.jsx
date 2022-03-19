import React from 'react';
import {useState} from 'react';
import Timercomp from './Timercomp';


function Timer() {
const [count, setCount]=useState(0)
const [text, setText]=useState([])

const myref=React.createRef();
    let handlercomp=()=>{
        let increment=count;
        increment++
        setCount(increment);
    }
    let addtext=()=>{
       let value1=myref.current.value;
       let newarr=[...text,value1];
       setText(newarr);
       myref.current.value='';
    }
    
    return ( 
        <>
        <h2>Timer</h2>
        <div>
            <button className='btn btn-danger' onClick={handlercomp}>Start</button>
        </div>
        <div>
            {count}
        </div>
        <div>
            <textarea ref={myref}></textarea>
        </div>
        <div>
            <button className='btn btn-primary' onClick={addtext}>Add text</button>
        </div>
        <div>
            <ul>
              {text.map((item,index)=><li key={index.toString()}>{item}</li>)}
            </ul>
        </div>
        <Timercomp/>
        </>
     );
}

export default Timer;