import React from "react";
import './card.css'

function Employee({details}) 
{
    
    return (
        <div className="employee">
            <div className="employee-logo">
                <img src={details.img} />
                </div>
            <div className="employee-details">
                <span>  EmployeeID: {details.id}</span>
                <span>  EmployeeName: {details.Name}</span>
                <span>  Year: {details.YearOfJoining}</span>

            </div>

            


        </div>
    )
}





// return(
//     <div className="card">
//         <div className="card_body">
//             <img src={props.img} />
//             <h2 className="card_title">{props.title}</h2>
//             <p className="card_description">
//                 {props.description}
//             </p>
//         </div>
//         <button className="card_button">Details</button>
//     </div>
// )


export default Employee;