import ReactMapboxGl, {Marker} from "react-mapbox-gl";
import React from 'react'

import * as S from './styles'


const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoibGluY2Vyb3NzYSIsImEiOiJjazlqb2JlcGgwOTk1M2xwaWhvcXp5ejZqIn0.Ze7z9aYIxNO3jBpOE2P9UA"
});


export default ({listOfPoints}) => (
  <S.MapWrapper>
    <Map
      center={listOfPoints[0].coordinates}
      style="mapbox://styles/mapbox/streets-v10"
      zoom={[11]}
    >
      {listOfPoints.map(({coordinates, label}, index) => (
        <Marker coordinates={coordinates} key={coordinates[0]}>
          <S.Mark>
            <S.MarkCircle>{index + 1}</S.MarkCircle>
            <S.MarkLabel>{label}</S.MarkLabel>
          </S.Mark>
        </Marker>
      ))}
    </Map>
  </S.MapWrapper>
)