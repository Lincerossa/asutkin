import React from 'react'
import {Link} from 'gatsby'

import Card from '../Card'
import List from '../List'
import * as S from './styles'

export default ({items}) => {

  return (<>
    <List columns={3}>
      {items.map(item => <Link key={item.slug} to={item.slug} disabled={!item.slug}> <S.ListItem> <Card {...item} /></S.ListItem></Link>)}
    </List>
  </>
  )
}