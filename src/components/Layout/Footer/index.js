import React from 'react'
import List from '../../List'

import PropTypes from "prop-types"
import * as S from './styles'

const Footer = ({pathPrefix}) => {

  return (
    <S.Footer>

      <S.LogoWrapper>
        <img loading="lazy"  src={`${pathPrefix}/logo-full.svg`} alt="" />
      </S.LogoWrapper>


      <List columns="3">
      <S.Column>
          <S.ColumnTitle>
            Titolo 1
          </S.ColumnTitle>
            <S.ColumnText>
              Testo A
            </S.ColumnText>
            <S.ColumnText>
              Testo B
            </S.ColumnText>
        </S.Column>

        <S.Column>
          <S.ColumnTitle>
            Titolo 2
          </S.ColumnTitle>
            <S.ColumnText>
              Testo A
            </S.ColumnText>
            <S.ColumnText>
              Testo B
            </S.ColumnText>
        </S.Column>

        <S.Column>
          <S.ColumnTitle>
            Titolo 3
          </S.ColumnTitle>
            <S.ColumnText>
              Testo A
            </S.ColumnText>
            <S.ColumnText>
              Testo B
            </S.ColumnText>
        </S.Column>
      </List>
    </S.Footer>
  )
}




Footer.propTypes = {
  title: PropTypes.string.isRequired,
  pathPrefix: PropTypes.string.isRequired,
  locationsTitle: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  })).isRequired,
  linksTitle: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,


}

export default Footer
