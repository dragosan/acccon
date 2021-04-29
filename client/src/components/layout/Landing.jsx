import React from "react"
import { Link } from "react-router-dom"
import Login from "../auth/Login"
import Register from "../auth/Register"

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <div className="auth">
            <Login />
            {/* <Register /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
