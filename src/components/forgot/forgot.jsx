import style from "./forgot.module.css";
import { Link } from "react-router-dom";

export default function Forgot() {
  return (
    <form onSubmit="event.preventDefault()">
      <label htmlFor="email">Email</label>
      <input required className={ style.input } type="email" placeholder="Email" id="email" />
      <button type="submit" className={ style.loginButton }>Send</button>
      <div className={ style.registerArea }>
        <p>Already have a account?</p>
        <Link to="/">Login</Link>
      </div>
    </form>
  )
}