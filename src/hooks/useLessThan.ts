import { useMediaQuery as useMedia } from 'react-responsive'

type UseMediaQueryProps = 'huge' | 'large' | 'medium' | 'small'

const types = {
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px'
}

function useLessThan(type: UseMediaQueryProps) {
  const isLessThan = useMedia({ maxWidth: types[type] })

  return isLessThan
}

export default useLessThan
