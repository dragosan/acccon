import React, { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = () => {
    //
  }
  return (
    <section className="container">
      <div className="form">
        <form onSubmit={onSubmit}>
          <ul className="form-container">
            <li>
              <h2>Login into your Account</h2>
            </li>
            <li className="errors">
              {/* {passError && <h3>{passError}</h3>} */}
              {/* {errors.length > 0 && <div className="srv-errors">{errors.map(error=><h3 key={error.msg}>{error.msg}</h3>)}</div>} */}
            </li>

            <li>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength="6"
              ></input>
            </li>

            <li>
              <button type="submit" className="btn btn-gold">
                Login
              </button>
            </li>
            {/* <li>
          don't have an account?
          <Link to="/register" className="button secondary text-center" 
          onClick={()=>setState(false)}>Register</Link>

        </li> */}
          </ul>
        </form>
      </div>
    </section>
  )
}

export default Login
