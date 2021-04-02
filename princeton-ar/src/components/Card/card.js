import React from 'react'
import { Link } from "gatsby";
import css from './card.css';
import { MdLoop } from "react-icons/md";
const Card = () => {
    return (
      <div className = "cardcontainer">
        <div className = "cardcontent">
          <div className = "title">
            Stanhope Hall
          </div>
          <div>
            <p className = "body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
            </p>
            <a href={'/resources/stanhope'} target="_blank" rel="noopener noreferrer"> LEARN MORE &#8594; </a>
          </div>
          <div>
            <p className = "body1">
              Use AR Filter XYZ here.
            </p>
          </div>
          <div>
            <MdLoop /> <span className = "body1"> Flip </span>
          </div>
        </div>
      </div>

    )
  };

export default Card;
