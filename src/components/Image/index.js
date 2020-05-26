import React from 'react'
import { LazyImageFull, ImageState   } from "react-lazy-images";
import PropTypes from "prop-types"
import * as S from './styles'


const MyImage = ({ image }) => (
  <S.ImageWrapper>
    <LazyImageFull src={image.src} debounceDurationMs={500}>
      {({ imageProps, imageState, ref }) => (
        <S.Image
          {...imageProps}
          loadEagerly
          ref={ref}
          src={
            imageState === ImageState.LoadSuccess
              ? imageProps.src
              : imageProps.src
          }
          loading={imageState === ImageState.NotAsked || imageState === ImageState.Loading}
          success={imageState === ImageState.LoadSuccess}
          error={imageState === ImageState.LoadError}
          imageState={imageState}
        />
        
      )}
    </LazyImageFull>
    {image.description && <S.Description>{image.description}</S.Description>}
  </S.ImageWrapper>

)
 
MyImage.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
}
export default MyImage

