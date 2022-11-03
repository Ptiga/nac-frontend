import React from "react";
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function User(props){

console.log(props)

const onSubmit = (event) => {

    console.log("On Submit - Update result")
    console.log("Result submitted: ", this.state.resultData)
    console.log("Result ID: ", this.state.resultData.id)
    console.log("O-comment submitted: ", this.state.resultData.operatorComment)
    console.log("S-comment submitted: ", this.state.resultData.supervisorComment)
    event.preventDefault();
/*
    axios.put(`/results/${this.state.resultData.id}`, {
        ...this.state.resultData
    })
    //renvoi vers les résultats
    .then(() => {
        //Redirection vers les résultats (pas trop bien compris le navigate sur classes)
        this.props.history("/results")
    })
*/
}


        return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="row form-container">
                    <div className="col">
                        <label>
                            Login :
                        </label>
                        <input className="form-control" name="login" type="text" value={props.login}></input>
                    </div>
                    <div className="col">
                        <label>
                            Last name :
                        </label>
                        <input className="form-control" name="lastName" type="text" value={props.lastName}></input>
                    </div>
                    <div className="col">
                        <label>
                            First name :
                        </label>
                        <input className="form-control" name="login" type="text" value={props.firstName}></input>
                    </div>
                    <div className="col">
                        <label>
                            Role :
                        </label>
                        <input className="form-control" name="lastName" type="text" value={props.role}></input>
                    </div>
                    <div className="col">
                        <label>
                            Team :
                        </label>
                        <input className="form-control" name="lastName" type="text" value={props.team}></input>
                    </div>
                    <div className="col">
                        <br/>
                        <div className="container-submit">
                            <input type="submit" value="Update" className="btn btn-warning" disabled></input>
                        </div>
                    </div>
                    <div className="col">
                        <br/>
                        <Link to={`/users/${props.login}`}>
                            <button className="btn btn-danger" disabled>Delete
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
        )



/*
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

const handleChange = (event) => {
    let currentState = {...user}
    currentState[event.target.name] = event.target.value
    setUser(currentState)
}

const onSubmit = (event) => {
    console.log("On Submit - Update result")
    console.log("Result submitted: ", this.state.resultData)
    console.log("Result ID: ", this.state.resultData.id)
    console.log("O-comment submitted: ", this.state.resultData.operatorComment)
    console.log("S-comment submitted: ", this.state.resultData.supervisorComment)
    event.preventDefault();

    axios.put(`/results/${this.state.resultData.id}`, {
        ...this.state.resultData
    })
    //renvoi vers les résultats
    .then(() => {
        //Redirection vers les résultats (pas trop bien compris le navigate sur classes)
        this.props.history("/results")
    })

}



console.log('user props : ', props)

return (
    <div className="container">
        <form onSubmit={onSubmit}>
            <div className="row user-container">
                <div className="col">
                    <label htmlFor='userName'>Username</label>
                    <input type='text' id='userName' name="userName" className='form-control' value={props.login} readOnly="readonly" ></input>
                </div>
                <div className="col">
                    <label htmlFor='lastName'>Last name</label>
                    <input type='text' id='lastName' name="lastName" className='form-control' value={props.lastName} readOnly="readonly" ></input>
                </div>
                <div className="col">
                    <label htmlFor='firstName'>First name</label>
                    <input type='text' id='firstName' name="firstName" className='form-control' value={props.firstName} readOnly="readonly" ></input>
                </div>
                <div className="col">
                    <label htmlFor='role'>Role</label>
                    <input type='text' id='role' name="role" className='form-control' value={props.role} readOnly="readonly" ></input>
                </div>
                <div className="col">
                    <label htmlFor='team'>Team</label>
                    <input type='text' id='team' name="team" className='form-control' value={props.team} readOnly="readonly" ></input>
                </div>
                <div className="col">
                    <div className="container-submit">
                        <input type="submit" value="Update" className="btn btn-primary" >Update user</input>
                    </div>
                </div>
            </div>
        </form>
    </div>
)

*/
}



export default User;