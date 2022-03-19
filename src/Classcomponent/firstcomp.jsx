import React from 'react'
import Secondcomp from './secondcomp';

class Firstcomp extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    handler=()=>{
        let newcount=this.state.count;
        newcount++;
        this.setState({
            count:newcount
        });
    }
    start=()=>{
        let zero=0;
        this.setState({
           count:zero
        });
    }
 render(){
     return(
         <>
         <h1>State</h1>
         <div>
         <button className="btn btn-danger" onClick={this.handler}>Change state</button>
         <button className="btn btn-primary" onClick={this.start}>Zerro</button>
         </div>
         <div>
             {this.state.count===0?'Null':'Number'}
         </div>
         <div>
             {this.state.count}
         </div>
         <Secondcomp/>
         </>
     )
 }
}
export default Firstcomp;