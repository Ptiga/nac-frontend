import './App.css';
import { isCompositeComponent } from 'react-dom/test-utils';
import User from './User';
import Result from './Result';
import ListResults from './ListResults';
import ListUsers from './ListUsers';
import RefreshListResults from './RefreshListResults';
import AddUser from './AddUser';
import Login from './Login';
import DetailledResult from './DetailledResult'
import Header from './Header';
import { Route } from 'react-router'
import { Routes, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Body from './Body'
import Oups from './Oups'

export const AUTH_TOKEN_KEY = 'jhi-authentificationToken'


/*A ACTIVER UNE FOIS LA CONNEXION OPERATIONNELLE*/

//Va nous servirt à afficher le composant Header si l'utilisateur est connecté
const UserConnected = ({userInfo, setUserInfo, userRole, setUserRole}) => {
  const history = useNavigate()
  const location = useLocation()

  useEffect(() => {
    //Je mets l'état de l'utilisateur à 'null'
    setUserInfo(null)
    //Je vérifie que mon utilisateur est connecté (et on renseigne les valeurs)
    axios.get('/isConnected').then(response => {
      //Si l'utilisateur est connecté
      let resp = response.data
      console.log('Chk Connected : ', resp)
      //On va transformer le résultat reçu
      let userData = resp.split('<#>')
      console.log('UD : ', userData)
      setUserInfo(userData[0])
      setUserRole(userData[1])
      console.log('Chk userName : ', userInfo)
      console.log('Chk userRole : ', userRole)
    }, () => {
      //Si l'utilisateur n'est pas connecté
      console.log('user connecté : ', userInfo)
      if(!location.pathname === '/login'){
        history('/login')
      }
    })
  }, [history, location.pathname])
  if(userInfo){
    return(
    <Header 
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          userRole={userRole}
          setUserRole={setUserRole}
        />
  )
  }
  
}


function App() {

//Intercepter le token JWT (à chaque requête)
useEffect(() => {
  console.log('App - je passe par ici')
  console.log('App - user info : ', userInfo)
  axios.interceptors.request.use(function (request) {
    //console('App - Request (début): ', request)
    const token = sessionStorage.getItem(AUTH_TOKEN_KEY)
    console.log('App - Token: ', token)
    if(token) {
      request.headers.Authorization = `Bearer ${token}`;
      console.log('App - ReqHeadAuth: ', request.headers.Authorization)
    }
    //console('App - Request (fin): ', request)
    return request
  }, (error) => {
    console.log('Erreur au login')
      console.log('App - Erreur: ', error)
      return Promise.reject(error);
  });
})

const [userInfo, setUserInfo] = useState([])
const [userRole, setUserRole] = useState([])


console.log("App - role : ", userRole)


  return (
    <div>
      <UserConnected 
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          userRole={userRole}
          setUserRole={setUserRole}
        />

      <div className="App">
        <div className='body-container'>
          <Body 
            userInfo={userInfo} 
            userRole={userRole} 
          />
        </div>
        <Routes>
          <Route path="/results" element={<ListResults userRole={userRole} />} />
          <Route path="/results/refresh" element={<RefreshListResults userRole={userRole} />} />
          <Route path="/results/:resultId" element={<DetailledResult userRole={userRole} />} />
          <Route path="/users" element={<ListUsers userRole={userRole} />} />
          <Route path="*" element={<Login userInfo={userInfo} setUserInfo={setUserInfo} userRole={userRole} setUserRole={setUserRole} />} />
          <Route path="/add-user" element={<AddUser setUserInfo={setUserInfo} userInfo={userInfo} />} />
          <Route path="/oups" element={<Oups setUserInfo={setUserInfo} userInfo={userInfo} userRole={userRole} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;