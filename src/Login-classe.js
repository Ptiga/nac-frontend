import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import './Login.scss';
import { AUTH_TOKEN_KEY } from './App';
import axios from "axios";


class Login extends React.Component{

    constructor(){
        super();
        this.state = {
            userData: {}
        }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    }

handleChange = (event) => {
    let currentState = {...this.state.userData}
    currentState[event.target.name] = event.target.value
    this.setState({userData: currentState})
}

onSubmit = (event) => {
    //event.preventDefault();
    console.log("On submit - login")
    console.log(this.state.userData)
    console.log("User login -> ", this.state.userData.login)
    console.log("User password -> ", this.state.userData.password)
    let jsonLogin = {
        login: this.state.userData.login,
        password: this.state.userData.password,
    }
    console.log('JsonLogin : ',jsonLogin)

    axios.post("/login", jsonLogin
        /*{
            //...this.state.userData
            login: this.state.userData.login,
            password: this.state.userData.password,
        }*/
    )
    .then(response => {
        console.log('Jai un retour !!!')
        
        let rep = response.data
        console.log('rep: ', rep)
        /*
        //console.log(response.data)
        //On va voir si on a un token dans le header de la réponse
        const bearerToken = response?.headers?.authorization
        console.log('retour: ', bearerToken)
        if (bearerToken && bearerToken.slice(0,7) === 'Bearer '){
            const jwt = bearerToken.slice(7, bearerToken.length)
            //J'insère mon token dans le storage
            sessionStorage.setItem(AUTH_TOKEN_KEY,jwt)
        }
        
        //On récupère toutes les infos du user
        //this.props.setUserInfo(response.data.login)
        //console.log('donnée user: ', )
        
        this.props.history("/results")
        */
    })
    
}


render(){
    return(
        <div className="login-container">
            <div>
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
                            <label htmlFor="password">Password</label>
                            <input type='password' id="password" name="password" className='form-control' placeholder="password" onChange={this.handleChange} ></input>
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

//Wrapper (fonction qui va nous permettre d'utiliser un hook dans un composant de type classe)
export default function (props){
    const history = useNavigate()
    return <Login {...props} history={history} />
}