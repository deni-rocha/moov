import * as React from 'react'
import { SVGProps } from 'react'

const SvgPainelRefresh = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={17}
    height={17}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-refresh-ccw"
    {...props}
  >
    <path d="M.709 2.834v4.25h4.25M16.291 14.166v-4.25h-4.25" />
    <path d="M14.514 6.375a6.375 6.375 0 0 0-10.519-2.38L.709 7.084m15.584 2.834-3.286 3.089a6.375 6.375 0 0 1-10.521-2.382" />
  </svg>
)

export default SvgPainelRefresh
