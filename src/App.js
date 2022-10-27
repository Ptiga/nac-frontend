import './App.css';
import { isCompositeComponent } from 'react-dom/test-utils';
import User from './User'
import Result from './Result'
import ListResults from './ListResults'
import ListUsers from './ListUsers'
import AddUser from './AddUser';
import Login from './Login';
import DetailledResult from './DetailledResult'
import Header from './Header';
import { Route } from 'react-router'
import { Routes, useNavigate, location } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Body from './Body'

export const AUTH_TOKEN_KEY = 'jhi-authentificationToken'


/*A ACTIVER UNE FOIS LA CONNEXION OPERATIONNELLE
//Va nous servirt à afficher le composant Header si l'utilisateur est connecté
const UserConnected = ({userInfo, setUserInfo}) => {
  const history = useNavigate()
  const location = useLocation()

  useEffect(() => {
    //Je mets l'état de l'utilisateur à 'null'
    setUserInfo(null)
    //Je vérifie que mon utilisateur est connecté (et on renseigne les valeurs)
    axios.get('/isConnected').then(response => {
      //Si l'utilisateur est connecté
      setUserInfo(response.data)
    }, () => {
      //Si l'utilisateur n'est pas connecté
      if(!location.pathname === '/login'){
        history('/login')
      }
    })
  }, [])
  return(
    <Header 
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
  )
}
*/

function App() {

//Intercepter le token JWT (à chaque requête)
useEffect(() => {
  axios.interceptors.request.use(function (request) {
    const token = sessionStorage.getItem(AUTH_TOKEN_KEY)
    console.log('Token: ', token)
    if(token){
      request.headers.Authorization = `Bearer ${token}`
    }
    return request
  }, (error) => {
      return Promise.reject(error)
  })
})

const [userInfo, setUserInfo] = useState('')

  return (
    <div>
      {/*
      A mettre à la place de Header une fois la connexion opérationnelle
        <UserConnected 
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
      */}
      {/*
      {userInfo &&
      */}
      <Header 
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
      {/*
      }
      */}
      <div className="App">
        <div className='body-container'>
          <Body 
            userInfo={userInfo} 
          />
        </div>
        <Routes>
          <Route path="/results" element={<ListResults />} />
          <Route path="/results/:resultId" element={<DetailledResult />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/add-user" element={<AddUser userInfo={userInfo} />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;