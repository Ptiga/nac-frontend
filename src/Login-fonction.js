import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import './Login.scss';
import { AUTH_TOKEN_KEY } from './App';
import axios from "axios";
import { useState } from 'react';


function Login(){

    const [userData, SetUserData] = useState(
        {
            login: '',
            password: ''
        }
    )

const handleChange = (event) => {
    console.log('UserData before change: ', userData)
    let currentState = {...userData};
    //event.target.name -> lien avec le champs name que l'on a mis dans la balise input et select
    //event.target.value -> valeur du champs rempli/modifié
    currentState[event.target.name] = event.target.value
    //Mise à jour de l'user
    SetUserData(currentState)
    console.log('UserData after change: ', userData)

}

const onSubmit = (event) => {
    console.log("On submit - login")
    
    console.log("User login -> ", userData.login)
    console.log("User password -> ", userData.password)
    let jsonLogin = {
        login: userData.login,
        password: userData.password,
    }
    console.log('JsonLogin : ',jsonLogin)

    axios.post("/login", jsonLogin
        /*{
            //...this.state.userData
            login: this.state.userData.login,
            password: this.state.userData.password,
        }*/
    )
    .then(() => {
        console.log('Jai un retour !!!')
        
        //let rep = response.data
        //console.log('rep: ', rep)
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


return(
        <div className="login-container">
            <div>
                <div className="title">
                    <h2>Welcome !</h2>
                </div>
                <div className="form-container">
                    <form onSubmit={onSubmit} >
                        <div>
                            <label htmlFor='login'>Login</label>
                            <input type='text' id='login' name="login" className='form-control' placeholder="login" onChange={handleChange} ></input>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type='password' id="password" name="password" className='form-control' placeholder="password" onChange={handleChange} ></input>
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

   
/*
//Wrapper (fonction qui va nous permettre d'utiliser un hook dans un composant de type classe)
export default function (props){
    const history = useNavigate()
    return <Login {...props} history={history} />
}
*/

export default Login