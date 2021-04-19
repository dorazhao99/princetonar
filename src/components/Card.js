import React, { useState } from 'react'
import { Link } from "gatsby";
import css from './Card.css';
import { MdLoop } from "react-icons/md";
const Card = props => {
    const [flip, setFlip] = useState(true)
    return (
      <div className = "cardcontainer">
        <div className = "cardcontent">
          <h2>
            {props.title}
          </h2>
          <div>
            {
              flip ? (
                <div>
                  <p className = "textbody">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
                  </p>
                  <a className = "learnlink" href={'/resources/stanhope'} target="_blank" rel="noopener noreferrer"> LEARN MORE &#8594; </a>
                </div>
              ) : (
                <div>
                  <p className = "textbody">
                    This AR filter
                  </p>
                  <a className = "learnlink" href={'/resources/ar1'} target="_blank" rel="noopener noreferrer"> LEARN MORE &#8594; </a>
                </div>
              )
            }
          </div>
          <div>
            <p className = "textbody">
              Use AR Filter XYZ here.
            </p>
          </div>
          <div className = "flip" onClick={() => setFlip(!flip)}>
            <MdLoop /> <span className = "body1"> Flip </span>
          </div>
        </div>
      </div>

    )
  };

export default Card;