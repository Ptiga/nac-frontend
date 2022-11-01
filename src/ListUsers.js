import React from "react";
import User from "./User";
import { useEffect, useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const ListUsers = (props) => {

const [users, setUsers] = useState([])

let history = useNavigate()


useEffect(() => {
    axios.get('/users')
    .then(response => {
        setUsers(response.data)
    })
}, [])
   
console.log('Users: ', users)

if(props.userRole==='ADMIN'){
    return(
        <div className="container" key={users.login}>
            <h2>
                Utilisateurs : 
            </h2>
            <div className="list-container">
                {users.map((user, key) => 
                    <User 
                        key={user.login}
                        login={user.login}
                        password={user.password}
                        role={user.role}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        team={user.team}
                    />

                    )
                }
            </div>
        </div>
    )                   
}else{
    history('/Oups')
}
}

export default ListUsers;