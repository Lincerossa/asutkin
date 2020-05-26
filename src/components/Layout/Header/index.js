import React, { useState} from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Wrapper from '../../Wrapper'
import * as S from './styles'
import Logo from './Logo'
import { useScrollDirection } from '../../../hooks'


const Header = ({ routes, pathPrefix, inverted }) => {
  const {scrollDirection, scrollPosition} = useScrollDirection()
  const [isOpen, setMenuOpen] = useState(null)
  const [selectedMenuItem, selectMenuItem] = useState(null)


  const innerHeight = (typeof window !== "undefined" && window.innerHeight) || 100

  const shouldBeInverted = inverted && scrollPosition < innerHeight
  
  return (
    <S.Header scrollDirection={scrollDirection} isOpen={isOpen} inverted={shouldBeInverted}>
      <Wrapper size="large">
        <S.HeaderInner>
          <S.Logo shouldBeInverted={shouldBeInverted}>
            <Link to="/">
             <Logo />
            </Link>
          </S.Logo>
          <S.Menu isOpen={isOpen} inverted={shouldBeInverted}>
            <S.MenuItems>
              {
                routes.filter(e => !e.hidden).map(({slug, label, routes}, index) => {
                  const isSelected = selectedMenuItem === index

                  return(
                    <S.MenuItem key={slug} onMouseEnter={() => selectMenuItem(index)} onMouseLeave={() => selectMenuItem(null)} isSelected={isSelected}>
                      <Link to={slug}>{label}</Link>
                      {
                        routes &&
                        routes.length > 0 && (
                          <>
                            <div
                              onClick={() => selectMenuItem(isSelected ? null : index)} // toggler
                              type={isSelected ? "caret-up": "caret-down" }
                              className="toggler"
                            />
                            <S.MenuItemsInner isSelected={isSelected} inverted={shouldBeInverted}>
                              {
                                routes.filter(e => !e.hidden).map((route) => (
                                  <S.MenuItemInner key={`${slug}/${route.slug}`}>
                                    <Link to={`${slug}/${route.slug}`}>
                                      <div  type={route.icon} /> {route.label}
                                    </Link>
                                  </S.MenuItemInner>
                              ))
                              }
                            </S.MenuItemsInner>
                          </>
                        )
                      }
                    </S.MenuItem>
                  )
                })
              }

              </S.MenuItems>
            </S.Menu>
          <S.Hamburger  isOpen={isOpen} inverted={shouldBeInverted} onClick={() => setMenuOpen(!isOpen)}><div  type={isOpen ? "close": "menu"} /> </S.Hamburger>
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