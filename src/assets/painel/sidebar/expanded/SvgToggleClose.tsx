import * as React from 'react'
import { SVGProps } from 'react'

const SvgToggleClose = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={29}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.036 0C6.288 0 0 6.025 0 13.449c0 7.423 6.288 13.448 14.036 13.448 7.747 0 14.035-6.025 14.035-13.448C28.071 6.025 21.783 0 14.036 0Zm7.018 13.449c0 .742-.603 1.345-1.345 1.345H8.362a1.345 1.345 0 1 1 0-2.69H19.71c.742 0 1.345.602 1.345 1.345Z"
      fill="#DEDEDE"
    />
  </svg>
)

export default SvgToggleClose
