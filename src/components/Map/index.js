import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";
import React from 'react'

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoibGluY2Vyb3NzYSIsImEiOiJjazlqb2JlcGgwOTk1M2xwaWhvcXp5ejZqIn0.Ze7z9aYIxNO3jBpOE2P9UA"
});


export default ({containerStyle, coordinates}) => (
  <Map
    center={coordinates}
    style="mapbox://styles/mapbox/streets-v10"
  >
    <Layer type="symbol" id="marker" layout={{ "icon-image": "triangle-11", "icon-size": 2,}}>
      <Feature coordinates={coordinates} />
    </Layer>
  </Map>
)