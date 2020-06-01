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


  function handleImageClick(index){
    if(typeof window !== "undefined" && window.innerWidth > 768) setIndex(index)
  }

  const isModalVisible = index === 0 || index
  return (
  <>
  
    <List columns={3}>
      {items.map((item, index) => <S.ListItem key={item.image.src} onClick={() => handleImageClick(index) }> <Image {...item} /></S.ListItem>)}
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
      width={typeof window !== "undefined" && window.innerWidth }
      bodyStyle={{
        height: "100vh",
      }}
    >
       { isModalVisible && <Slider {...{
          dots: true,
          arrows: true,
          autoplay: false,
          nextArrow: <RightOutlined />,
          prevArrow: <LeftOutlined />,
          initialSlide: index
        }}>
          {items.map((item) => <S.Slide><Image {...item} /></S.Slide>)}
        </Slider>}
    </Modal>
  </>
  )
}