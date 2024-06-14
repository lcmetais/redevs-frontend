import Banner from '../../Components/Banner'
import CardsSection from '../../Components/CardsSection'
import { Slide, SlideProps, Slider } from '../../Components/Slider'
import * as S from './styles'

const ArrayUrlBanners = [
  {
    alt: 'banner1',
    url: '/images/banner1.png'
  },
  {
    alt: 'banner2',
    url: '/images/banner2.png'
  },
  {
    alt: 'banner3',
    url: '/images/banner3.png'
  }
]

const LandingPage = () => {
  const settings: SlideProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
      type: 'bullets'
    }
  }

  return (
    <>
      <Slider settings={settings}>
        {ArrayUrlBanners.map((itemBanner) => {
          return (
            <Slide>
              <Banner url={itemBanner.url} alt={itemBanner.alt} />
            </Slide>
          )
        })}
      </Slider>
      <S.Wrapper>
        <CardsSection sectionTitle='Anúncios' />
      </S.Wrapper>
    </>
  )
}

export default LandingPage
