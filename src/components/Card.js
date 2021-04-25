import React, { useState } from 'react'
import { Link } from "gatsby";
import css from './Card.css';
import { MdLoop } from "react-icons/md";
import $ from 'jquery';

const Card = props => {
    function flip () {
      $('.cardcontent').toggleClass('flipped');
    }

    return (
      <div className = "cardcontainer">
        <div className = "cardcontent">
          <div className="front">
            <h2>
              {props.title}
            </h2>
            <p className = "textbody">
              {props.description}
            </p>
            <a className = "learnlink" href={'/resources/stanhope'} target="_blank" rel="noopener noreferrer"> LEARN MORE &#8594; </a>
            <p/>
            <p className = "textbody">
              Use the AR filter, <i> {props.artitle} </i>, here.
            </p>
            <span className = "flip" onClick={() => flip()}>
              <MdLoop /> <span className = "body1"> Flip </span>
            </span>
           </div>
          <div className="back">
            <h2>
              {props.artitle}
            </h2>
            <p className = "textbody">
              {props.ar}
            </p>
            <a className = "learnlink" href={'/resources/stanhope'} target="_blank" rel="noopener noreferrer"> LEARN MORE &#8594; </a>
            <p/>
            <p className = "textbody">
              Use the AR filter, <i> {props.artitle} </i>, here.
            </p>
            <span className = "flip" onClick={() => flip()}>
              <MdLoop /> <span className = "body1"> Flip </span>
            </span>
          </div>
        </div>
      </div>

    )
  };

export default Card;

// <h2>
//   {props.title}
// </h2>
// <div>
//   {
//     flip ? (
//       <div>
//         <p className = "textbody">
//           {props.description}
//         </p>
//         <a className = "learnlink" href={'/resources/stanhope'} target="_blank" rel="noopener noreferrer"> LEARN MORE &#8594; </a>
//       </div>
//     ) : (
//       <div>
//         <p className = "textbody">
//           This AR filter
//         </p>
//         <a className = "learnlink" href={'/resources/ar1'} target="_blank" rel="noopener noreferrer"> LEARN MORE &#8594; </a>
//       </div>
//     )
//   }
// </div>
// <div>
//   <p className = "textbody">
//     Use AR Filter XYZ here.
//   </p>
// </div>
