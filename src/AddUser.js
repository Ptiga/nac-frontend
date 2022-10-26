import {useParams} from 'react-router-dom'
import { useState } from 'react';
import './AddUser.scss';
import axios from 'axios';
import { AUTH_TOKEN_KEY } from './App';

function AddUser(){

    let{userId} = useParams();
    const [user, setUser] = useState(
        {
            login: '',
            password: '',
            firstName: '',
            lastName: '',
            role: '',
            team: ''
        }
    )

    const roles = [
        {
            label: 'comptable'
        },
        {
            label: 'manager'
        },
        {
            label: 'administrateur'
        },
    ]

    const teams = [
        {
            label: 'admin'
        },
        {
            label: 'bu-a'
        },
        {
            label: 'bu-b'
        },
    ]

    const handleChange = (event) => {
        console.log(user)
        let currentState = {...user};
        //event.target.name -> lien avec le champs name que l'on a mis dans la balise input et select
        //event.target.value -> valeur du champs rempli/modifié
        currentState[event.target.name] = event.target.value
        //Mise à jour de l'user
        setUser(currentState)
        console.log(user)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("On Submit - Add User")
        console.log("User submitted: ", user)
        console.log("User login: ", user.login)
        console.log("User role: ", user.role)
        
        //Méthode post (on envoie les données utilisteur)
        axios.post('/create-users', {
            ...user
        })
        
        
        .then(response => {
        //On va voir si on a un token dans le header de la réponse
            const bearerToken = response?.header?.authorization
            console.log('retour: ', bearerToken)
            if (bearerToken && bearerToken.slice(0,7) === 'Bearer '){
                const jwt = bearerToken.slice(7, bearerToken.length)
                //J'insère mon token dans le storage
                sessionStorage.setItem(AUTH_TOKEN_KEY,jwt)
            }
        })
    }



    return (
        <div className="container-add-user">
            <h1>
                Ajouter un utilisateur
            </h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>
                        Login :
                    </label>
                    <input className="form-control" name="login" type="text" onChange={handleChange}></input>
                </div>
                <div>
                    <label>
                        Password :
                    </label>
                    <input name="password" type="text" className="form-control" onChange={handleChange} ></input>
                </div>
                <div>
                    <label>
                        First name :
                    </label>
                    <input name="firstName" type="text" className="form-control" onChange={handleChange} ></input>
                </div>
                <div>
                    <label>
                        Last Name :
                    </label>
                    <input className="form-control" name="lastName" type="text" onChange={handleChange} ></input>
                </div>
                <div>
                    <label>
                        Role :
                    </label>
                    <select name="role" className="form-control" onChange={handleChange} >
                        {roles.map(role => (
                            <option value={role.label} key={role.label}>
                                {role.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>
                        Team :
                    </label>
                    <select name="team" className="form-control" onChange={handleChange} >
                        {teams.map(team => (
                            <option value={team.label} key={team.label}>
                                {team.label}
                            </option>
                        ))} 
                    </select>
                </div>
                <div className="container-submit">
                    <input type="submit" value="Create user" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}

export default AddUser;