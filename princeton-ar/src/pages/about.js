import * as React from "react"
import {
  Header
} from '../components';

import css from './about.css';

const AboutPage = () => {
  return (
    <div className = "root">
      <title> About </title>
      <Header/>
      <div>
        <h1> About </h1>
        <p>
          The Princeton AR project was created as a product of the course  <a> SOC / COS 414: Designing Anti-Racist Technologies</a>, taught by
          Professor Janet Vertesi.
        </p>
      </div>
    </div>
  )
}

export default AboutPage
