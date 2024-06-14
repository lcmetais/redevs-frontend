import { Swiper, SwiperProps } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'

import * as S from './styles'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type SliderProps = {
  children: React.ReactNode
  settings: SwiperProps
}

const Slider = ({ settings, children }: SliderProps) => {
  return (
    <S.WrapperSlide>
      <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
        {children}
      </Swiper>
    </S.WrapperSlide>
  )
}

export default Slider
