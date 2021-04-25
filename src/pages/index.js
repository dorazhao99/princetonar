import React, { useRef, useState, useEffect } from "react"
import Header from '../components/Header';
import Map from '../components/Map';
import Card from '../components/Card';

import css from './index.css';
// markup
const places = [
  {
    name: "Stanhope Hall",
    longitude: -74.65997895830495,
    latitude: 40.348925748332896,
  },
  {
    name: "Firestone Library",
    longitude: -74.65686200267893,
    latitude: 40.34992168126388,
  },
  {
    name: "Double Sights",
    longitude: -74.65506645397396,
    latitude: 40.34940165404589,
  },
  {
    name: "Frist Campus Center",
    longitude: -74.65520130063396,
    latitude: 40.34704682387998,
  },
]

const places_info = {
  "Stanhope Hall" : {
    bio: "Home to Princeton University's African American Studies Department, Stanhope Hall is named for Samuel Stanhope Smith, the University's seventh President. We chose to replace the Stanhope name because Smith was a proponent of geographic racism and an enslaver.",
    artitle: "Rename Stanhope!",
    ar: "Our AR filter replaces the Stanhope name with surnames of people of color who have made an impact on this campus. The names includes activist Helen Zia '73, Supreme Court Justice Sonia Sotomayor '76, and former First Lady Michelle Obama '85."
  },
  "Firestone Library": {
    bio: "Firestone Library is one of the most well-known study spaces on campus and is named for Harvey S. Firestone Sr. We chose to replace Firestone's name because of his exploitation of African workers on his rubber plantations in Liberia and his engagement in imperialist foreign policy.",
    artitle: "Rename Firestone!",
  },
  "Frist Campus Center": {
    bio: "Frist Campus Center is the hub of student life on campus. On the front of Frist, there are two statues of Benjamin Franklin and Joseph Henry. We chose to replace these statues with iconography that better reflects students of color on campus, many of whom have had moments of joy in Frist."
  },
  "Double Sights" : {
    bio: "Designed by Walter Hood, the Double Sights Momument was intended to "
  }
}
const IndexPage = () => {
  const [place, setPlace] = useState('Stanhope Hall')

  function handleChange(name) {
      setPlace(name)
  }

  return (
    <div className = "root">
      <title> Home Page </title>
      <Header/>
      <div className = "content">
        <Map places={places} handeChange={handleChange}/>
        <div>
          <Card title={place} description={places_info[place]['bio']} artitle = {places_info[place]['artitle']} ar={places_info[place]['ar']}/>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

// <title>Home Page</title>
// <h1 style={headingStyles}>
//   Congratulations
//   <br />
//   <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
//   <span role="img" aria-label="Party popper emojis">
//     🎉🎉🎉
//   </span>
// </h1>
// <p style={paragraphStyles}>
//   Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
//   update in real-time.{" "}
//   <span role="img" aria-label="Sunglasses smiley emoji">
//     😎
//   </span>
// </p>
// <ul style={listStyles}>
//   <li style={docLinkStyle}>
//     <a
//       style={linkStyle}
//       href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
//     >
//       {docLink.text}
//     </a>
//   </li>
//   {links.map(link => (
//     <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
//       <span>
//         <a
//           style={linkStyle}
//           href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
//         >
//           {link.text}
//         </a>
//         {link.badge && (
//           <span style={badgeStyle} aria-label="New Badge">
//             NEW!
//           </span>
//         )}
//         <p style={descriptionStyle}>{link.description}</p>
//       </span>
//     </li>
//   ))}
// </ul>
// <img
//   alt="Gatsby G Logo"
//   src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
// />
// </main>
