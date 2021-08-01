import React from "react"

function button(props){

    var colorobj={
        "primary":"#0000FF",
        "seconday":"orange",
        "":"#0000FF"
    }
    // var colors = {
    //     label1:"primary",
    //     value1: "#0000FF",

    //     label2:"secondary",
    //     value2: "orange",

    //     label3:"",
    //     value3: "#0000FF"

    // }
    // function getdata(data){
        
    //     if(data == colors.label1){
    //         return colors.value1;
    //     }

    //     if(data == colors.label2){
    //         return colors.value2;
    //     }

    //     if(data == colors.label3){
    //         return colors.value3;
    //     }
    // }
   
    return (
        <div>            
            <button style={{background:colorobj[(props.btn)]}}>{props.btn || "default" }</button>
        </div>
    )
}
export default button