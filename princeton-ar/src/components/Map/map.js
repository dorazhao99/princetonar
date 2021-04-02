// map.js
import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const MAPBOX_TOKEN = ""

const mapContainerStyle = {
  width: "100%",
  height: "100%",
}

// on top of map.js
const places = [
  {
    name: "Empire State Building",
    longitude: -73.9856,
    latitude: 40.7497,
  },
  {
    name: "Birch Coffee",
    longitude: -73.9864,
    latitude: 40.7438,
  },
  {
    name: "B&H",
    longitude: -73.9961,
    latitude: 40.753,
  },
]

const Map = () => {
  const mapContainerRef = useRef(null)
  const [map, setMap] = useState(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      // Princeton University
      center: [-74.6551, 40.3431],
      zoom: 215,
    })
    map.addControl(new mapboxgl.NavigationControl(), "top-right")

    setMap(map)

    return () => map.remove()
  }, [])

  return <div ref={mapContainerRef} style={mapContainerStyle} />
}

export default Map
