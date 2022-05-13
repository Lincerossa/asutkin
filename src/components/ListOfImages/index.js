import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from '../Image'
import List from '../List'
import * as S from './styles'
import { isDesktop } from '../../utility'

const DynamicListOfImagesNoSSR = dynamic(
  () => import('../ModalSliderOfImages'),
  { ssr: false, loading: () => <p>...</p> },
)

export default ({ items }) => {
  const [initialSlideIndex, setInitialSlideIndexIndex] = useState(null)

  const handleClose = () => {
    setInitialSlideIndexIndex(null)
  }

  return (
    <>
      <List columns={3}>
        {items.map((item, index) => (
          <S.ListItem
            key={item.image.src}
            onClick={() => isDesktop && setInitialSlideIndexIndex(index)}
          >
            <Image {...item} />
          </S.ListItem>
        ))}
      </List>

      {(initialSlideIndex || initialSlideIndex === 0) && (
        <DynamicListOfImagesNoSSR
          items={items}
          initialSlideIndex={initialSlideIndex}
          onClose={handleClose}
        />
      )}
    </>
  )
}
