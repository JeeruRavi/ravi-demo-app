
import Counter from './count';
import Button from './button';
import { useState } from "react";
import Employee from './employee';
import Navbar from './Navigation';
import Search1 from './Search1';



var employees = [
  { id: 101, Name: "Ravi", YearOfJoining: 2016, img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Akshay_Kumar_at_Star_Guild_Awards.jpg" },
  { id: 102, Name: "Sunil", YearOfJoining: 2017, img: "https://st1.bollywoodlife.com/wp-content/uploads/2021/03/Ajay-Devgn.jpg" },
  { id: 103, Name: "Shirisha", YearOfJoining: 2018, img: "https://c.ndtvimg.com/2021-07/ri0rs328_salman-khan_625x300_20_July_21.jpg" },
  { id: 104, Name: "Kalpana", YearOfJoining: 2019, img: "https://filmfare.wwmindia.com/content/2020/jul/shahrukhkhan41596116759.jpg" },


];



function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [dropDownID, setdropDownID] = useState("");

  
  const searchHandler = (searchText,dropDownSelect) => {
     setSearchTerm(searchText);
     setdropDownID(dropDownSelect);
    //  updateEmployee1(searchTerm);
     
  }


  const dropDownHandler = (dropDownID) => {
    setdropDownID(dropDownID);
    
 }

//   const updateEmployee1 = (filteredEmployee) => {
//     { <div className="search-container">
//     {employees.filter(employee =>
//       employee.toLowerCase == searchTerm.toLowerCase)
//       .map((filteredEmp, key) => {
//         <Employee
//           key={"emp"} details={filteredEmp}
//         />
//       })
          
//     }
//   </div>} 
    
//  }





  return (
    <div className="App">
      <header className="App-header">

      </header>



      <div className="navbar-details">
        <Navbar searchHandler={searchHandler} dropDownHandler={dropDownHandler} />
        
      </div>
      

      {/* <div className="employee-container">
        {employees.map((employee, key) =>

          <Employee
            key={"emp"} details={employee}
            //term={searchTerm}
          />          
        )}

      </div> */}

      





      <div className="search-container">
        {employees.filter((employee) =>{
          if(searchTerm === ""){
            return employee;
          } else if (dropDownID=="employeeID" && employee.id.toLowerCase().includes(searchTerm.toLowerCase())) {
            return employee;
          } else if (dropDownID=="employeeName" && employee.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return employee;
          } else if (dropDownID=="yearOfJoining" && employee.YearOfJoining.toLowerCase().includes(searchTerm.toLowerCase())) {
          return employee;
        }

        }).map((employee, index) =>

          <Employee
            key={"emp"} details={employee}
            
          />
        )}

      </div>

     
    </div>
  );



}



export default App;
