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

export default ({items, visible, initialSlideIndex, handleReset}) => {

  return (
    <Modal
      visible={visible}
      mask
      onCancel={handleReset}
      onOk={handleReset}
      footer={null}
      title={null}
      centered
      height={isDesktop && window.innerHeight}
      width={isDesktop && window.innerWidth }
      bodyStyle={{
        height: "100vh",
      }}
    >
     { visible && <Slider {...{
        dots: true,
        arrows: true,
        autoplay: false,
        nextArrow: <RightOutlined />,
        prevArrow: <LeftOutlined />,
        initialSlide: initialSlideIndex
      }}>
        {items.map((item) => <S.Slide><Image {...item} /></S.Slide>)}
      </Slider>}
  </Modal>)
}