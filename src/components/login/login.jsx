import style from "./login.module.css";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';

export default function Login() {
  return (
    <form onSubmit="event.preventDefault()">
      <label htmlFor="email">Email</label>
      <input required className={ style.input } type="email" placeholder="Email" id="email" />
      <label htmlFor="password">Password</label>
      <input required className={ style.input } type="password" placeholder="Password" id="password" minLength={8}/>
      <div className={ style.rememberForgot }>
        <div className={ style.rememberMe }>
          <Checkbox color="secondary"/>
          <p>Remember Me</p>
        </div>
        <div className={ style.forgotPass }>
          <Link to="/forgot">Forgot password?</Link>
        </div>
      </div>
      <button type="submit" className={ style.loginButton }>Login</button>
      <div className={ style.registerArea }>
        <p>Not registered yet?</p>
        <Link to="/register">Create an account</Link>
      </div>
    </form>
  )
}