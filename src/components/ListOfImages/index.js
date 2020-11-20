import React, { useState, useCallback} from 'react'
import Image from '../Image'
import List from '../List'
import * as S from './styles'
import {isDesktop} from '../../utility'

const ModalSliderOfImages = React.lazy(() =>
  import("../ModalSliderOfImages")
)

export default ({items}) => {
  const [initialSlideIndex, setInitialSlideIndexIndex] = useState(null)

  function handleClose(){
    setInitialSlideIndexIndex(null)
  }

  return (
  <>
    <List columns={3}>
      {items.map((item, index) => <S.ListItem key={item.image.src} onClick={() => isDesktop && setInitialSlideIndexIndex(index) }> <Image {...item} /></S.ListItem>)}
    </List>

    {isDesktop && (
      <React.Suspense fallback={<div />}>
        {(initialSlideIndex || initialSlideIndex === 0) && <ModalSliderOfImages
          items={items}
          initialSlideIndex={initialSlideIndex}
          onClose={handleClose}
        />}
      </React.Suspense>
    )}
  </>
  )
}