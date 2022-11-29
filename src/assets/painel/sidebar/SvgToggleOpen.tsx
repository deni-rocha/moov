import * as React from 'react'
import { SVGProps } from 'react'

const SvgToggleOpen = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={29}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.036 0C6.288 0 0 6.025 0 13.449c0 7.423 6.288 13.448 14.036 13.448 7.747 0 14.035-6.025 14.035-13.448C28.071 6.025 21.783 0 14.036 0Zm7.018 13.066c0 .16.233.177.256.02L22 8.5c-1.3 0-2.088 1.435-1.39 2.532L22.24 13.6a.973.973 0 1 0 .822-1.496h-10.43l8.716 4.675a.561.561 0 0 0 .807-.642l-.849-3.105c-.04-.145-.253-.116-.253.034Z"
      fill="#DEDEDE"
    />
    <path
      d="M12.155 18.786a.53.53 0 0 1-.051-.689l.051-.06 4.567-4.566-4.567-4.567a.53.53 0 0 1-.051-.69l.051-.059a.53.53 0 0 1 .69-.051l.059.051 4.94 4.942a.53.53 0 0 1 .052.689l-.051.06-4.941 4.94a.53.53 0 0 1-.749 0Z"
      fill="#fff"
    />
  </svg>
)

export default SvgToggleOpen
