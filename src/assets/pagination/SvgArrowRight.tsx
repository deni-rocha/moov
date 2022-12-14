import * as React from 'react'
import { SVGProps } from 'react'

const SvgArrowRight = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={8}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.226 10.838a.95.95 0 0 0 1.345 0l4.38-4.379a.95.95 0 0 0 0-1.345L2.57.734A.95.95 0 1 0 1.226 2.08L4.928 5.79 1.226 9.493a.959.959 0 0 0 0 1.345Z"
      fill="#535353"
    />
  </svg>
)

export default SvgArrowRight
