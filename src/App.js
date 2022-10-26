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
import { Routes } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Body from './Body'

export const AUTH_TOKEN_KEY = 'jhi-authentificationToken'

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


  return (
    <div>
      <Header />
      <div className="App">
        <div className='body-container'>
          <Body />
        </div>
        <Routes>
          <Route path="/results" element={<ListResults />} />
          <Route path="/results/:resultId" element={<DetailledResult />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;