import React from "react";
import Firstcomp from "./firstcomp";
import Timer from "../Functioncomponent/funccomponent";
class Clcomp extends React.Component{

    render(){
        return(
            <>
            <Firstcomp/>
            <hr/>
            <Timer/>
            </>
        )
    }

}
export default Clcomp;