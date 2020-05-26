import React, { useState} from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { CloseOutlined,MenuOutlined } from '@ant-design/icons';
import Wrapper from '../../Wrapper'
import * as S from './styles'
import Logo from './Logo'
import { useScrollDirection } from '../../../hooks'


const Header = ({ routes, currentRoute, inverted }) => {
  const {scrollDirection, scrollPosition} = useScrollDirection()
  const [isOpen, setMenuOpen] = useState(null)

  const innerHeight = (typeof window !== "undefined" && window.innerHeight) || 100

  const shouldBeInverted = inverted && (scrollPosition < innerHeight)
  
  return (
    <S.Header scrollDirection={scrollDirection} isOpen={isOpen} inverted={shouldBeInverted}>
      <Wrapper size="large">
        <S.HeaderInner>
          <S.Logo inverted={shouldBeInverted}>
            <Link to="/">
             <Logo />
            </Link>
          </S.Logo>
          <S.Menu isOpen={isOpen} inverted={shouldBeInverted}>
            <S.MenuItems>
              {
                routes.filter(e => !e.hidden).map(({slug, label}) => {
                  const isActive = slug === currentRoute.slug


                  return(
                    <S.MenuItem key={slug} isActive={isActive} inverted={shouldBeInverted}>
                      <Link to={slug}>{label}</Link>
                    </S.MenuItem>
                  )
                })
              }
              </S.MenuItems>
            </S.Menu>
          <S.Hamburger isOpen={isOpen} inverted={shouldBeInverted} onClick={() => setMenuOpen(!isOpen)}>
            { isOpen ? <CloseOutlined /> : <MenuOutlined />}</S.Hamburger>
        </S.HeaderInner>
      </Wrapper>
    </S.Header>
  )
}


Header.propTypes = {
  pathPrefix: PropTypes.string.isRequired,
  inverted: PropTypes.bool.isRequired,
  footer:  PropTypes.shape({ // this needs to be changed after the new md file of felix
    languagesTitle: PropTypes.string.isRequired,
    languages:  PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        icon: PropTypes.string,
    }))
  }).isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
      routes: PropTypes.arrayOf(
        PropTypes.shape({
          slug: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          icon: PropTypes.string,
      }))
    }).isRequired
  ),
}

export default Header