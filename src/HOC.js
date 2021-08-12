import React, {Component} from 'react';

function withLogin(Login){
    return class extends Component{
        render(){
            return(
               <div> 
               Hwllo <Login />
                </div>
            )
        }
    }
}

export default withLogin;