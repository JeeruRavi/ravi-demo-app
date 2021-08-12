
import Counter from './count';
import Button from './button';
import React, { useState, useEffect } from 'react';
import Employee from './employee';
import Navbar from './Navigation';
import Search1 from './Search1';
import Login from './Login';
import withLogin from './HOC';
import Images from './Images';






var employees = [
  { id: 101, Name: "Ravi", YearOfJoining: 2016, img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Akshay_Kumar_at_Star_Guild_Awards.jpg" },
  { id: 102, Name: "Sunil", YearOfJoining: 2017, img: "https://st1.bollywoodlife.com/wp-content/uploads/2021/03/Ajay-Devgn.jpg" },
  { id: 103, Name: "Shirisha", YearOfJoining: 2018, img: "https://c.ndtvimg.com/2021-07/ri0rs328_salman-khan_625x300_20_July_21.jpg" },
  { id: 104, Name: "Kalpana", YearOfJoining: 2019, img: "https://filmfare.wwmindia.com/content/2020/jul/shahrukhkhan41596116759.jpg" },


];

const adminUser = {
  email : "ravi@admin.com",
  password : "r123456"
}



function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [dropDownID, setdropDownID] = useState("");
  const [filterEmployee, setFilterEmployee] = useState([]);
  const[name, setName] = useState()
  const[password, setPassword] = useState()

  const handlerLogin = (name, password) => {
    setName(name);
    setPassword(password);
  }



  const searchHandler = (searchText, dropDownSelect) => {
    setSearchTerm(searchText);
    setdropDownID(dropDownSelect);
    //  updateEmployee1(searchTerm);

  }
  
  const textSearchFilter = () =>{
    return employees.filter((employee) =>{
      if(!dropDownID)
      return employee;
      const input = (dropDownID == "Name") ? employee[dropDownID].toLowerCase() : employee[dropDownID];
      if(input == searchTerm.toLowerCase()){
        return employee;
      }   
    })
  }

  const loingDetails = () => {
      if(name=="ravi@admin.com" && password=="r123456"){
      return true;
      }else{
        return false;
      }
  }


  useEffect(() => {
           
      const search_filtered = textSearchFilter()    
      
    // const result = search_filtered.length ? search_filtered : employees
    setFilterEmployee(search_filtered);
       
  },[searchTerm, dropDownID])


  useEffect(() => {
           
    const verifyLogin = loingDetails()  
    
    console.log(verifyLogin);
    
  
     
},[name, password])


  return (
    <div className="App">
      <header className="App-header">
      </header>
      {/* <div className="navbar-details">
        <Navbar searchHandler={searchHandler}/>
        
      </div>  */}

      <div className="login-details">
       <Login handlerLogin={handlerLogin}/>
      </div>  


      {/* <div className="login-details">
       <Login handlerLogin={handlerLogin}/>
      </div>   */}

      



      <div className="search-container">           
        
        {filterEmployee.map((employee) => 
          <Employee
            key={employee.id} details={employee}/>
        )}
      </div>
    
    </div>
  );



}



export default App;
