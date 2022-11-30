import * as React from 'react'
import { SVGProps } from 'react'

const SvgEdit = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    {...props}
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.25 10.9374V13.7499H3.0625L11.3575 5.45492L8.545 2.64242L0.25 10.9374ZM13.5325 3.27992C13.825 2.98742 13.825 2.51492 13.5325 2.22242L11.7775 0.467422C11.485 0.174922 11.0125 0.174922 10.72 0.467422L9.3475 1.83992L12.16 4.65242L13.5325 3.27992Z"
      fill="#6E40FF"
    />
  </svg>
)

export default SvgEdit
