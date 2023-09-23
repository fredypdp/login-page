import './App.css'
import Login from "./components/login/login";
import Forgot from "./components/forgot/forgot";
import Register from "./components/register/register";
import googleIcon from "./assets/img/google-icone.png";
import formIcon from "./assets/img/Group 1686550876.png";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <main>
        <section className='wallpaper-area'></section>
        <section className='form-side'>
          <div className="form-area">
            <div className="form-icon"><img draggable="false" src={ formIcon }/></div>
            <div className="tittle-area">
              <h1>Login to your Account</h1>
              <p>See what is going on with your business</p>
            </div>
            <div className="google-button">
              <img draggable="false" src={ googleIcon }/>
              <p>Continue with Google</p>
            </div>
            <div className='sign-email'>
              <div className='bar'></div>
              <div className="text">or Sign in with Email</div>
              <div className='bar'></div>
            </div>
            <Routes>
              <Route path="/" exact element={ <Login/> }/>
              <Route path="/forgot" element={ <Forgot/> }/>
              <Route path="/register" element={ <Register/> }/>
              <Route path="*" element={ <Navigate to="/" replace/> }/>
            </Routes>
          </div>
        </section>
      </main>
    </Router>
  )
}
