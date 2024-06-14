import * as S from './styles'

type BannerProps = {
  url: string
  alt: string
}

const Banner = ({ url, alt }: BannerProps) => {
  return (
    <S.WrapperBanner>
      <S.Banner src={url} alt={alt} />
    </S.WrapperBanner>
  )
}

export default Banner
