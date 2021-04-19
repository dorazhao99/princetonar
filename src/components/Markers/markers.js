import React, { useRef, useEffect } from "react"
import mapboxgl from "mapbox-gl"

const Marker = ({ map, place, parentCallback }) => {
  const markerRef = useRef()

  useEffect(() => {
    const marker = new mapboxgl.Marker(markerRef)
      .setLngLat([place.longitude, place.latitude])
      .addTo(map)

    marker.getElement().addEventListener('click', () => {
      parentCallback(place.name);
    });
    return () => marker.remove()
  })

  return <div ref={markerRef} />
}

const Markers = ({ map, places, parentCallback }) => {
  console.log(places, parentCallback)
  return (
    <>
      {places &&
        places.map(place => (
          <Marker key={place.name} map={map} place={place} parentCallback={parentCallback}/>
        ))}
    </>
  )
}

export default Markers
