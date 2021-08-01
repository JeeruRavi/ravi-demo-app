import React from "react";
import './card.css';
import Employee from "./employee";
import { useState } from 'react';

function Navbar(props) {

   const [searchTerm, setSearchTerm] = useState(); 
   const [dropDownID, setdropDownID] = useState("");

   const setSearchTerm1= ((e) =>{
        setSearchTerm(e.target.value);
        
   })

   const submitHandler = (searchEmployee) =>{
        props.searchHandler(searchTerm, dropDownID)
      
   }

   const setSearchDropdown= ((e) =>{
       console.log(e.target.value);
    setdropDownID(e.target.value);
    
    
})
    

    return (
        <div className="NavBar">
            <div className="leftSide">
                <div className="links">
                    <a href="/home">Home</a>
                    <a href="/features">Features</a>
                    <a href="/pricing">Pricing</a>
                    <div className="dropDown">
                    <select  value= {dropDownID} onChange={setSearchDropdown}>
                        <option value="employeeID">Employee Id</option>
                        <option value="employeeName">Employee Name</option>
                        <option value="yearOfJoining">Year of Joining</option>
                    </select>
                    </div>
                </div>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Search" value={searchTerm}  onChange= {setSearchTerm1} />

                <button onClick={submitHandler}>Search</button>
            </div>
        </div>
    )
}
export default Navbar;