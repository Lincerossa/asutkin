import React, { useState} from 'react'
import { Modal } from 'antd';
import Slider from "react-slick";
import Image from '../Image'

import List from '../List'

import {
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';

import * as S from './styles'

export default ({filtes, items}) => {
  const [index, setIndex] = useState(null)

  function handleReset(){
    setIndex(null)
  }

  const isModalVisible = index === 0 || index
  return (
  <>
  
    <List columns={3}>
      {items.map((item, index) => <S.ImageWrapper key={item.image.src} onClick={() => setIndex(index) }> <Image {...item} /></S.ImageWrapper>)}
    </List>

    <Modal
      visible={isModalVisible}
      mask
      onCancel={handleReset}
      onOk={handleReset}
      footer={null}
      title={null}
      centered
      height={typeof window !== "undefined" && window.innerHeight}
      width={typeof window !== "undefined" && (window.innerWidth > 768 ? window.innerWidth / 1.5 : window.innerWidth) }
    >
      <S.ModalInner>
       { isModalVisible && <Slider {...{
          dots: true,
          arrows: true,
          autoplay: false,
          nextArrow: <RightOutlined />,
          prevArrow: <LeftOutlined />,
          initialSlide: index
        }}>
          {items.map((item) => <Image {...item} />)}
        </Slider>}

      </S.ModalInner>
    </Modal>
  </>
  )
}