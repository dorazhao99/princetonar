import React, { useState } from 'react'
import { Link } from "gatsby";
import css from './card.css';
import { MdLoop } from "react-icons/md";
const Card = props => {
    const [flip, setFlip] = useState(true)
    return (
      <div className = "cardcontainer">
        <div className = "cardcontent">
          <div className = "title">
            {props.title}
          </div>
          <div>
            {
              flip ? (
                <div>
                  <p className = "body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
                  </p>
                  <a href={'/resources/stanhope'} target="_blank" rel="noopener noreferrer"> LEARN MORE &#8594; </a>
                </div>
              ) : (
                <div>
                  <p className = "body1">
                    This AR filter
                  </p>
                  <a href={'/resources/ar1'} target="_blank" rel="noopener noreferrer"> LEARN MORE &#8594; </a>
                </div>
              )
            }
          </div>
          <div>
            <p className = "body1">
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
