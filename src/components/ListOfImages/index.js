import React from 'react'
import { Modal } from 'antd';
import Slider from "react-slick";
import Image from '../Image'
import { useCounter } from '../../hooks'
import List from '../List'

import {
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';

import * as S from './styles'

export default ({filtes, items}) => {

  const count = useCounter(state => state.count)
  const set = useCounter(state => state.set)
  const reset = useCounter(state => state.reset)


  const isModalVisible = count === 0 || count
  return (<>
  
  <List columns={3}>
    {items.map((item, index) => <S.ImageWrapper onClick={() => set(index) }> <Image {...item} /></S.ImageWrapper>)}
  </List>

    <Modal
      visible={isModalVisible}
      mask
      onCancel={reset}
      onOk={reset}
      footer={null}
      title={null}
      top={20}
      centered
      width={typeof window !== "undefined" && (window.innerWidth > 768 ? window.innerWidth / 1.5 : window.innerWidth) }
    >
      <S.ModalInner>
        {isModalVisible && <Slider {...{
          dots: true,
          arrows: true,
          autoplay: false,
          nextArrow: <RightOutlined />,
          prevArrow: <LeftOutlined />,
          initialSlide: count
        }}>
          {items.map((item) => <Image {...item} />)}
        </Slider>}

      </S.ModalInner>
    </Modal>
  </>
  )
}