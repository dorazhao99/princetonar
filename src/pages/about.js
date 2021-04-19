import * as React from "react";
import Header from '../components/Header';

import css from './about.css';

const AboutPage = () => {
  return (
    <div className = "root">
      <title> About </title>
      <Header/>
      <div>
        <h1> About </h1>
        <p>
          The Princeton AR project was created as a product of the course
          <a href={'https://registrar.princeton.edu/course-offerings/course-details?term=1214&courseid=015937'} target="_blank" rel="noopener noreferrer"> SOC 414 / COS 415: Can We Build Anti-Racist Technologies?</a>,
          taught by Professor Janet Vertesi in Spring 2020-21.
        </p>
      </div>
    </div>
  )
}

export default AboutPage
