import React from 'react'
import {Link} from 'gatsby'

import Card from '../Card'
import List from '../List'


export default ({filtes, items}) => {

  return (<>
  <List columns={3}>
    {items.map(item => <Link key={item.slug} to={item.slug} disabled={!item.slug}> <Card {...item} /></Link>)}
  </List>
  </>
  )
}