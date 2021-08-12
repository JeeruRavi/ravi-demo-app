import React  from "react";
import './card.css';
import Employee from "./employee";
import { useState } from 'react';
import withLogin from "./HOC";

function Navbar(props) {

   const [searchText, setSearchTerm] = useState(); 
   const [dropDownSelect, setdropDownID] = useState("");

   const setSearchTerm1= ((e) =>{
        setSearchTerm(e.target.value);
        
   })

   const submitHandler = () =>{
        props.searchHandler(searchText, dropDownSelect)
      
   }

   const setSearchDropdown= ((e) =>{
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
                    <select  value= {dropDownSelect} onChange={setSearchDropdown}>
                        <option> -- select an option -- </option>
                        <option value="id">Employee Id</option>
                        <option value="Name">Employee Name</option>
                        <option value="YearOfJoining">Year of Joining</option>
                    </select>
                    </div>
                </div>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Search" value={searchText}  onChange= {setSearchTerm1} />

                <button onClick={submitHandler}>Search</button>
            </div>
        </div>
    )
}
export default withLogin(Navbar);