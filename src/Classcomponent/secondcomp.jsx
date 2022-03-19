import React from 'react';
import '../Style/second.css'
class Secondcomp extends React.Component{
    constructor(){
        super();
        this.state={
            coment:[]
        }
        this.mytext=React.createRef();
    }
changetext=()=>{
    let coment1=this.mytext.current.value;
    let array=this.state.coment;
    array.push(coment1);
    this.setState({
        'array':array
    });
    this.mytext.current.value=''
}

    render() { 
        return (
            <>
            <div className="second">
            <div>
                <textarea ref={this.mytext}></textarea>
            </div>
            <div>
                <button className="btn btn-success" onClick={this.changetext}>Enter text</button>
            </div>
            <div>
                <ul>
                   {this.state.coment.map((rez,index)=><li key={index.toString()}>{rez}</li>)} 
                </ul>
            </div>
            </div>
            </>
        );
    }
}
 
export default Secondcomp;