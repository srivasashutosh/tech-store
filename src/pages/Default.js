import React from 'react'
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";
import {Link} from "react-router-dom";
export default function Default() {
  return (
    <>
     <Hero img={defaultBcg} title="404" max="true">
    <h2 className="text-uppercae">page not found</h2>
    <Link to="/" className="main-link" style={{margin:"2rem"}}>return home</Link>
     </Hero>
    </>
  )
}
