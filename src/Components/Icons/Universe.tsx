import * as React from 'react'
import { SVGProps } from 'react'
interface UniverseIconProps {
  title?: string
  titleId?: string
}
const UniverseIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & UniverseIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={31}
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#84CAFF"
      fillRule="evenodd"
      d="M15 30.191c8.284 0 15-6.758 15-15.095S23.284 0 15 0C6.716 0 0 6.759 0 15.096S6.716 30.19 15 30.19Zm-1.124-11.26h2.25c.208 0 .375-.17.375-.378V17.8h.095c.172 0 .319-.116.361-.282.032-.123.072-.284.118-.476h1.973l-.489-2.216a1.504 1.504 0 0 0-.834-1.04c.163-1.05.285-2.166.285-3.16 0-2.265-3.002-4.532-3.002-4.532s-3.002 2.265-3.002 4.532c0 .994.121 2.11.285 3.16a1.493 1.493 0 0 0-.837 1.04l-.488 2.216h1.975c.046.192.086.353.117.476a.373.373 0 0 0 .362.282h.078v.753c.004.21.17.378.378.378Zm2.625-1.131h-3.003v-.002h3.003v.002Zm-1.493-7.93a1.13 1.13 0 0 1 1.126 1.133 1.13 1.13 0 0 1-1.126 1.133 1.13 1.13 0 0 1-1.126-1.133 1.13 1.13 0 0 1 1.126-1.132Zm4.41 9.648a2.246 2.246 0 0 1 1.964-1.156v-.002c1.213 0 2.204.97 2.246 2.177l.007-.001c0 3.22-3.865 5.83-8.63 5.83-4.505 0-8.202-2.33-8.597-5.302a2.26 2.26 0 0 1 2.209-2.703c.821 0 1.57.445 1.964 1.155.607.1 1.11.526 1.313 1.108h.854c.38 0 .67-.383.863-.79.087.02.175.035.265.035h2.255c.062 0 .123-.01.183-.018.29.52.836.726.993.775h.8a1.676 1.676 0 0 1 1.311-1.108Zm4.133-10.584a1.846 1.846 0 0 1-1.84 1.852c-1.017 0-1.84-.83-1.84-1.852 0-1.022.823-1.851 1.84-1.851 1.016 0 1.84.829 1.84 1.851ZM7.755 7.883a.976.976 0 0 0 .972-.979.976.976 0 0 0-.972-.979.976.976 0 0 0-.973.979c0 .54.436.979.973.979Zm-.346 2.383c0 .54-.436.979-.973.979a.976.976 0 0 1-.972-.98c0-.54.435-.978.972-.978.537 0 .973.438.973.979Z"
      clipRule="evenodd"
    />
  </svg>
)
export default UniverseIcon
