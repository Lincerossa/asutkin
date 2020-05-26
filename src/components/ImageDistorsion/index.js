import React from "react"
import PropTypes from "prop-types"

import * as S from './styles'

const ImageDistortion = ({ image, width, height }) => (
  <S.ImageDistortion width={width} height={height}>
    <S.Glitch>
      <S.GlitchImage image={image} />
      <S.GlitchImage image={image} />
      <S.GlitchImage image={image} />
      <S.GlitchImage image={image} />
      <S.GlitchImage image={image} />
    </S.Glitch>
  </S.ImageDistortion>
)


ImageDistortion.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}

export default ImageDistortion
