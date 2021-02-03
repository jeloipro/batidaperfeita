import React from "react"
import { Link } from "gatsby"
import Logotipo from "../../static/assets/logo-batida-perfeita-150x150.png"

const Logo = (props) => (
  <div className="site-logo">

    <Link to="/"><img src={Logotipo } alt="Batida Perfeita"/></Link>
    
  </div>
)

export default Logo