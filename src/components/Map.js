import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "!mapbox-gl"
import bbox from "@turf/bbox"
import { multiPoint } from "@turf/helpers"
import Markers from '../components/Markers';
import "mapbox-gl/dist/mapbox-gl.css"

const mapContainerStyle = {
  width: "100%",
  height: "80vh",
}

const Map = props => {
  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)
  const [place, setPlace] = useState('stanhope')

  function parentCallback(place) {
      props.handeChange(place)
  }

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: process.env.MAPBOX,
      style: "mapbox://styles/mapbox/dark-v10",
      // Empire State Building [lng, lat]
      center: [-74.6551, 40.3431],
      zoom: 15,
    })

    map.addControl(new mapboxgl.NavigationControl(), "top-right")

    setMap(map)

    return () => map.remove()
  }, [])

  useEffect(() => {
    if (!map) return

    if (props.places && props.places.length !== 0) {
      const coords = []
      props.places.forEach(place => {
        coords.push([place.longitude, place.latitude])
      })
      const feature = multiPoint(coords)
      const box = bbox(feature)

      map.fitBounds(
        [
          [box[0], box[1]],
          [box[2], box[3]],
        ],
        {
          padding: 40,
          maxZoom: 14,
          duration: 2000,
        }
      )
    } else {
      map.easeTo({
        center: [-73.9856, 40.7497],
        zoom: 10,
        duration: 2000,
      })
    }
  }, [map, props.places])

  return (
    <div ref={mapContainerRef} style={mapContainerStyle}>
      {props.places && map && <Markers map={map} places={props.places} parentCallback={parentCallback}/>}
    </div>
  )
}

export default Map
