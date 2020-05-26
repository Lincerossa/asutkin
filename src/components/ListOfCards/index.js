import React, { useState } from 'react'
import {Link} from 'gatsby'

import Card from '../Card'
import List from '../List'


export default ({filtes, items}) => {

  const [activeFilters, setFilters] = useState(null)
  
  return (<>
  <List columns={3}>
    {items.map(item => <Link to={item.slug}> <Card {...item} /></Link>)}
  </List>
  </>
  )
}