import React from 'react'
import {useState} from 'react'
function Timercomp() {
    const [count,setCount]=useState(0)
    const incrementvalue=()=>{
        setCount(count+1)
        if(count===60)
        {
            let start=0
            setCount(start)
        }
        
    }

   React.useEffect(()=>{
       const valueinterval=setInterval(incrementvalue,1000)
       return()=>{
           
           clearInterval(valueinterval)
           
        
       }
   },[count])
   let zerrofunc=()=>{
       let zerro=0
       setCount(zerro)
   }
   

    return (  
        <>
        <div>
            {count}
        </div>
        <div>
            <button className='btn btn-primary' onClick={zerrofunc}>Zerro</button>
            
        </div>
        </>
    );
}

export default Timercomp;