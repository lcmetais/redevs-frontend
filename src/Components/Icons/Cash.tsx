import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
  width?: number
  height?: number
}

const CashIcon = ({
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
      d="M12.0859 3C12.0859 4.10457 9.6235 5 6.58594 5C3.54837 5 1.08594 4.10457 1.08594 3M12.0859 3C12.0859 1.89543 9.6235 1 6.58594 1C3.54837 1 1.08594 1.89543 1.08594 3M12.0859 3V4.5M1.08594 3V15C1.08594 16.1046 3.54837 17 6.58594 17M6.58594 9C6.41739 9 6.25062 8.99724 6.08594 8.99185C3.28269 8.89999 1.08594 8.04328 1.08594 7M6.58594 13C3.54837 13 1.08594 12.1046 1.08594 11M21.0859 9.5C21.0859 10.6046 18.6235 11.5 15.5859 11.5C12.5484 11.5 10.0859 10.6046 10.0859 9.5M21.0859 9.5C21.0859 8.39543 18.6235 7.5 15.5859 7.5C12.5484 7.5 10.0859 8.39543 10.0859 9.5M21.0859 9.5V17C21.0859 18.1046 18.6235 19 15.5859 19C12.5484 19 10.0859 18.1046 10.0859 17V9.5M21.0859 13.25C21.0859 14.3546 18.6235 15.25 15.5859 15.25C12.5484 15.25 10.0859 14.3546 10.0859 13.25"
      stroke="#98A2B3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CashIcon
