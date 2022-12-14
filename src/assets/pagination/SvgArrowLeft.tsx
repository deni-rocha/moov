import * as React from 'react'
import { SVGProps } from 'react'

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={8}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.772.744a.95.95 0 0 0-1.345 0l-4.38 4.38a.95.95 0 0 0 0 1.344l4.38 4.38a.95.95 0 1 0 1.345-1.346L3.07 5.791l3.702-3.702a.959.959 0 0 0 0-1.345Z"
      fill="#535353"
    />
  </svg>
)

export default SvgArrowLeft
