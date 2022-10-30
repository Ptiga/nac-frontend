import { Link, useNavigate } from 'react-router-dom'
import { AUTH_TOKEN_KEY } from './App'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Header(props){

    const history = useNavigate()

    const logOff = () => {
        //On va supprimer le token du local storage
        sessionStorage.removeItem(AUTH_TOKEN_KEY)
        console.log('Déconnexion')
        //on met à null les infos utilisateur
        //props.setUserInfo(null)
        history('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/results"> Results </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users"> Users </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add-user"> Add user </Link>
                    </li>
                </ul>
                <div>Bienvenue {props.userInfo}</div>
                <button variant="secondary" onClick={logOff}>Log Off</button>
            </div>
        </nav>
    )
}

export default Header;