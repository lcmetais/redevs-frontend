import React from 'react'
import * as S from './styles'

type MainProps = {
  children: React.ReactNode
}

const Main = ({ children }: MainProps) => {
  return (
    <S.Main>
      {children}
    </S.Main>
  )
}

export default Main
