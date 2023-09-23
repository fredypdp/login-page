import style from "./register.module.css";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';

export default function Register() {
  return (
    <form onSubmit="event.preventDefault()">
      <label htmlFor="email">Nome</label>
      <input required className={ style.input } type="text" placeholder="Nome" id="nome" />
      <label htmlFor="email">Sobrenome</label>
      <input required className={ style.input } type="text" placeholder="Sobrenome" id="sobrenome" />
      <label htmlFor="email">Email</label>
      <input required className={ style.input } type="email" placeholder="Email" id="email" />
      <label htmlFor="password">Password</label>
      <input required className={ style.input } type="password" placeholder="Password" id="password" minLength={8}/>
      <div className={ style.rememberForgot }>
        <div className={ style.rememberMe }>
          <Checkbox color="secondary"/>
          <p>Remember Me</p>
        </div>
      </div>
      <button type="submit" className={ style.loginButton }>Register</button>
      <div className={ style.registerArea }>
        <p>Already have a account?</p>
        <Link to="/">Login</Link>
      </div>
    </form>
  )
}
