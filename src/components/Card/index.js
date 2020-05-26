import React from 'react'
import trimHtml from 'trim-html'
import Image from '../Image'
import * as S from './styles'

const Card = ({ options = {}, image, supertitle, title, tags, content }) => {

  const { html } = content && trimHtml(content, { limit: 75 });
  const { full= true } = options
  
  return(
    <S.Card>
      <S.MediaWrapper full={full}>
        <Image image={image} />
      </S.MediaWrapper>
      
      <S.Description full={full}>
        <S.Supertitle>{supertitle}</S.Supertitle>
        <S.Title full={full}>{title}</S.Title>
        { tags && tags.length > 0 &&
          <S.TagsWrapper>
            {
              tags.map(tag => <S.Tag>{tag}</S.Tag>)
            }
          </S.TagsWrapper>
        }
        {html && <S.Content>{html}</S.Content>}
      </S.Description>
    </S.Card>
  )
}


export default Card