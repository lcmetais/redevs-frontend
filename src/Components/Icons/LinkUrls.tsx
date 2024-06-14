import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
  color?: string
  widht?: number
  height?: number
}

const LinkUrlIcon = ({
  title,
  titleId,
  color,
  width = 24,
  height = 24,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    viewBox="0, 0, 32, 32"
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M10.375 9.96094H9.75C6.29822 9.96094 3.5 12.6659 3.5 16.0026C3.5 19.3393 6.29822 22.0443 9.75 22.0443H12.25C15.7018 22.0443 18.5 19.3393 18.5 16.0026M21.625 22.0443H22.25C25.7018 22.0443 28.5 19.3393 28.5 16.0026C28.5 12.6659 25.7018 9.96094 22.25 9.96094H19.75C16.2982 9.96094 13.5 12.6659 13.5 16.0026"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default LinkUrlIcon
