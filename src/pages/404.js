import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiBugLine, RiSkullLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Page not found"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <header>
        <RiSkullLine style={{
          fontSize: "128px",
          color: "var(--primary-color)"
        }}/>
        <h1>Opa, não esperávamos que isso acontecesse</h1>
        <p>Você já se perguntou sobre o desconhecido. Deixe-nos ajudá-lo, por favor, dê uma olhada nas opções abaixo</p>
      </header>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Voltar à Página Inicial</Link>
      <Link to="/contact" className="button -outline">Reportar isto <RiBugLine className="icon -right"/></Link>
    </div>
  </Layout>
)

export default NotFound