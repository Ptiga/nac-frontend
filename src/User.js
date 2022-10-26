import React from "react";

function User(props){

console.log(props)

        return (
        <div className="container">
            <p>login : {props.login}</p>
            <p>nom : {props.lastName}</p>
            <p>prénom : {props.firstName}</p>
            <p>role : {props.role}</p>
            <p>---------------------</p>
        </div>
        )
}



export default User;