import {Link, useNavigate} from 'react-router-dom'




function Oups(props){

let history = useNavigate()

console.log('Oups - props : ', props)

if(props.userRole==='ADMIN'){
    return(
        <div className='container'>
            <h1>
                Oops Something went wrong {props.userInfo} !
            </h1>
            <p>
                It seems you tried to go somewhere you couldn't
            </p>
            <div className="oups-buttons-container">
                <div className="oups-results-button-container">
                    <Link to='/users'>
                        <button className="btn btn-primary">Go to the list of users
                        </button>
                    </Link>
                </div>
                <div className="oups-login-button-container">
                    <Link to='/login'>
                        <button className="btn btn-primary">Go to the login page
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}else if(props.userRole==='USER'){
return(
    <div className='container'>
        <h1>
            Oops Something went wrong {props.userInfo} !
        </h1>
        <p>
            It seems you tried to reach the higher level.
        </p>
        <div className="oups-buttons-container">
            <div className="oups-results-button-container">
                <Link to='/results'>
                    <button className="btn btn-primary">Go to the list of results
                    </button>
                </Link>
            </div>
            <div className="oups-login-button-container">
                <Link to='/login'>
                    <button className="btn btn-primary">Go to the login page
                    </button>
                </Link>
            </div>
        </div>
    </div>
)
}else{
    return(
        <div className='container'>
            <h1>
                Oops Something went wrong {props.userInfo} !
            </h1>
            <p>
                It seems you don't have authorization you to use this tool.
            </p>
            <p>
                Contact your administrator or login with a different account.
            </p>
            <div className="oups-buttons-container">
                <div className="oups-login-button-container">
                    <Link to='/login'>
                        <button className="btn btn-primary">Go to the login page
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

}

export default Oups;