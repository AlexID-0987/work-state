import React from 'react'
import {useState} from 'react'
function Timercomp() {
    const [count,setCount]=useState(0)
    const [minute,setMinute]=useState(0)
    const [hour, setHour]=useState(0)
    const incrementvalue=()=>{
        setCount(count+1)
        if(count===59)
        {
            let start=0
            setCount(start)
            
           setMinute(minute+1)
           {
              if(minute===59)
              {
                let newminute=0
                setMinute(newminute)
                 setHour(hour+1)
              }
           }
        
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
       setMinute(zerro)
       setHour(zerro)
   }
   

    return (  
        <>
        <div>
         {hour}:{minute}:{count}
        </div>
        <div>
            <button className='btn btn-primary' onClick={zerrofunc}>Zerro</button>
            
        </div>
        </>
    );
}

export default Timercomp;