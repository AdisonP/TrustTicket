import React from 'react'
import * as S from './EventSquareMin.styled'
import Image from 'next/image'

export default function EventSquareMin({
  description,
  img,
  name,
  displayDetail,
  date,
}) {
  return (
    <S.Main>
      <S.Row>
        <S.Square
          onClick={displayDetail}
          className='dashboardEvent-btn'
          type='button'
        >
          <Image
            style={{ borderRadius: '30px' }}
            placeholder='empty'
            src={
              img != 'empty'
                ? process.env.NEXT_PUBLIC_API_URL + img
                : '/event_placeholder.png'
            }
            width={'200px'}
            height={'200px'}
          />
        </S.Square>
      </S.Row>

      <S.Row style={{ width: '200px', justifyContent: 'center' }}>
        <S.EventName>{name}</S.EventName>
      </S.Row>

      <S.Row style={{ width: '200px', alignContent: 'center' }}>
        <S.Date className='dashboardEvent-description'>{date}</S.Date>
      </S.Row>

      <S.Row style={{ width: '200px', alignContent: 'center' }}>
        <S.Description className='dashboardEvent-description'>
          {description}
        </S.Description>
      </S.Row>
    </S.Main>
  )
}
