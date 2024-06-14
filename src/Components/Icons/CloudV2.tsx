import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
  width?: number
  height?: number
}

const CloudIcon = ({
  title,
  titleId,
  width = 19,
  height = 19,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M6.58594 19C4.10066 19 2.08594 16.9853 2.08594 14.5C2.08594 12.1564 3.87745 10.2313 6.16568 10.0194C6.63375 7.17213 9.10618 5 12.0859 5C15.0657 5 17.5381 7.17213 18.0062 10.0194C20.2944 10.2313 22.0859 12.1564 22.0859 14.5C22.0859 16.9853 20.0712 19 17.5859 19C13.1961 19 10.4292 19 6.58594 19Z"
      stroke="#98A2B3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CloudIcon
