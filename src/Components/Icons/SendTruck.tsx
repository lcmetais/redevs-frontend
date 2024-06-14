import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
  color?: string
  viewBox?: string
}

const SendTruck = ({
  title,
  titleId,
  height = 24,
  width = 24,
  viewBox = `0, 0, 24, 24`,
  color = '#344054',
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width={height}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 4H15.3373C15.5818 4 15.7041 4 15.8192 4.02763C15.9213 4.05213 16.0188 4.09253 16.1083 4.14736C16.2092 4.2092 16.2957 4.29568 16.4686 4.46863L20.5314 8.53137C20.7043 8.70432 20.7908 8.7908 20.8526 8.89172C20.9075 8.98119 20.9479 9.07873 20.9724 9.18077C21 9.29586 21 9.41815 21 9.66274V12.5C21 12.9659 21 13.1989 20.9239 13.3827C20.8224 13.6277 20.6277 13.8224 20.3827 13.9239C20.1989 14 19.9659 14 19.5 14M14.5 14H13M13 14V4.2C13 3.0799 13 2.51984 12.782 2.09202C12.5903 1.71569 12.2843 1.40973 11.908 1.21799C11.4802 1 10.9201 1 9.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V12C1 13.1046 1.89543 14 3 14M13 14H9M9 14C9 15.6569 7.65685 17 6 17C4.34315 17 3 15.6569 3 14M9 14C9 12.3431 7.65685 11 6 11C4.34315 11 3 12.3431 3 14M19.5 14.5C19.5 15.8807 18.3807 17 17 17C15.6193 17 14.5 15.8807 14.5 14.5C14.5 13.1193 15.6193 12 17 12C18.3807 12 19.5 13.1193 19.5 14.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {title ? <title id={titleId}>{title}</title> : null}
  </svg>
)

export default SendTruck
