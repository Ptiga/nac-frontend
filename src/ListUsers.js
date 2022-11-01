import React from "react";
import User from "./User";
import { useEffect, useState } from 'react';


const ListUsers = () => {

const [users, setUsers] = useState([])

useEffect(() => {
    setUsers([
        {
            login: "auro",
            password: "admin",
            role: "administrateur",
            firstName: "Aurélien",
            lastName: "Roger",
            team: "admin"
        },
        {
            login: "shingo",
            password: "admin",
            role: "manager",
            firstName: "Shingo",
            lastName: "Aoi",
            team: "bu-a"
        }
    ] 
    )
}, [])
   
console.log('Users: ', users)
    
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
    
}

export default ListUsers;