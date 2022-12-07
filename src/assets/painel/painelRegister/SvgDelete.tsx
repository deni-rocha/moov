import * as React from 'react'
import { SVGProps } from 'react'

const SvgDelete = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    {...props}
    width="13"
    height="17"
    viewBox="0 0 13 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.25 14.625C1.25 15.5875 2.0375 16.375 3 16.375H10C10.9625 16.375 11.75 15.5875 11.75 14.625L11.75 5.875C11.75 4.9125 10.9625 4.125 10 4.125L3 4.125C2.0375 4.125 1.25 4.9125 1.25 5.875L1.25 14.625ZM3.875 5.875L9.125 5.875C9.60625 5.875 10 6.26875 10 6.75L10 13.75C10 14.2313 9.60625 14.625 9.125 14.625L3.875 14.625C3.39375 14.625 3 14.2313 3 13.75L3 6.75C3 6.26875 3.39375 5.875 3.875 5.875ZM9.5625 1.5L8.94125 0.87875C8.78375 0.72125 8.55625 0.625 8.32875 0.625L4.67125 0.625C4.44375 0.625 4.21625 0.72125 4.05875 0.87875L3.4375 1.5L1.25 1.5C0.76875 1.5 0.375 1.89375 0.375 2.375C0.375 2.85625 0.76875 3.25 1.25 3.25L11.75 3.25C12.2313 3.25 12.625 2.85625 12.625 2.375C12.625 1.89375 12.2313 1.5 11.75 1.5L9.5625 1.5Z"
      fill="#EB5A46"
    />
  </svg>
)

export default SvgDelete
