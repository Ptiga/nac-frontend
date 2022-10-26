import React from "react";
import {Link} from 'react-router-dom'
import logoSG from './img/LogoSG.jpg'
import logoNac from './img/LogoNAC.png'
import './Login.scss';

class Login extends React.Component{

    constructor(){
        super();
        this.state = {
            userData: {}
        }


    }

handleChange = (event) => {
    let currentState = {...this.state.userData}
    currentState[event.target.name] = event.target.value
    this.setState({userData: currentState})
}

onSubmit = (event) => {
    event.preventDefault();
    console.log("On submit - login")
    console.log(this.state.userData)
    console.log("User login: ", this.state.userData.login)
    console.log("User password: ", this.state.userData.password)
}

render(){
    return(
        <div className="login-container">
                <div>
                    <div>
                    <div>
                        <img src={logoSG} alt="Société Générale" />
                    </div>
                    <div>
                        <img src={logoNac} alt="NAC" />
                    </div>
                </div>
                <div className="title">
                    <h2>Welcome !</h2>
                </div>
                <div className="form-container">
                    <form onSubmit={this.onSubmit} >
                        <div>
                            <label htmlFor='login'>Login</label>
                            <input type='text' id='login' name="login" className='form-control' placeholder="login" onChange={this.handleChange} ></input>
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' name="password" className='form-control' placeholder="password" onChange={this.handleChange} ></input>
                        </div>
                        <div>
                            <input type="submit" className="btn btn-primary" value="Connexion" />
                        </div>
                    </form>
                    <div>
                        <Link to="/add-user">Create user</Link>
                    </div>
                </div> 
            </div> 
        </div>
    )
}

   
}

export default Login;