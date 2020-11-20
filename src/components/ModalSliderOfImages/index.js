import React from 'react'
import { Modal } from 'antd'
import Slider from "react-slick"
import {
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'

import Image from '../Image'
import * as S from './styles'
import { isDesktop } from '../../utility'

export default ({items, initialSlideIndex, onClose}) => {
  return (
    <Modal
      visible
      mask
      onCancel={onClose}
      onOk={onClose}
      footer={null}
      title={null}
      centered
      height={isDesktop && window.innerHeight}
      width={isDesktop && window.innerWidth }
      bodyStyle={{
        height: "100vh",
      }}
    >
     <Slider {...{
        dots: true,
        arrows: true,
        autoplay: false,
        nextArrow: <RightOutlined />,
        prevArrow: <LeftOutlined />,
        initialSlide: initialSlideIndex
      }}>
        {items.map((item) => <S.Slide key={item?.image?.src}><Image {...item} /></S.Slide>)}
      </Slider>
  </Modal>)
}