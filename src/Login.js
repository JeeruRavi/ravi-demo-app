import React from 'react'
import {useState} from 'react'
import withLogin from './HOC'
import Employee from './employee'
function Login(props, Employee) {
   
     
    const[name, setName] = useState()
    const[password, setPassword] = useState()

   const setLoginName = (e) => {
        setName(e.target.value);
    }

   const setLoginPassword = (e) => {
         setPassword(e.target.value);
    }

   const loginHandler = () => {
       props.handlerLogin(name, password);
   }

   return class extends React.Component {
    
   render(){

    return(

        <div className="email">
            <label>Email:</label>
            <input type="text" value= {name} onChange={setLoginName}></input>
            <div className="password">
            <label>Password:</label>
            <input type="password" value={password} onChange={setLoginPassword}></input>
            </div>
            <div className="password">
                <button  onClick={loginHandler}>Login</button>
            </div>
            
        </div>
    )
   }
}
}

export default Login;
