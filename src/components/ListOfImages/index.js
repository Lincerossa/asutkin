import React, { useState} from 'react'

import Image from '../Image'
import List from '../List'

import * as S from './styles'
import {isDesktop} from '../../utility'

const ModalSliderOfImages = React.lazy(() =>
  import("../ModalSliderOfImages")
)


export default ({items}) => {
  const [initialSlideIndex, setInitialSlideIndexIndex] = useState(null)

  function handleReset(){
    setInitialSlideIndexIndex(null)
  }


  function handleImageClick(index){

   
    if(isDesktop) setInitialSlideIndexIndex(index)
  }

  const visible = initialSlideIndex === 0 || initialSlideIndex

  return (
  <>
    <List columns={3}>
      {items.map((item, index) => <S.ListItem key={item.image.src} onClick={() => handleImageClick(index) }> <Image {...item} /></S.ListItem>)}
    </List>

    {isDesktop && (
      <React.Suspense fallback={<div />}>
        <ModalSliderOfImages
          items={items}
          visible={visible}
          initialSlideIndex={initialSlideIndex}
          handleReset={handleReset}
        />
      </React.Suspense>
    )}
  </>
  )
}