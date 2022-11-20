import * as React from 'react'

interface PropSVG {
  fill: string
  width: number
  height: number
  className: string
}
const SVGPainelSearch = ({
  fill,
  width,
  height,
  className
}: PropSVG): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12.9499 12.4244H12.2982L12.0672 12.2017C13.0571 11.0468 13.5686 9.47114 13.2881 7.79652C12.9004 5.5032 10.9865 3.67185 8.67673 3.39137C5.18726 2.96241 2.25049 5.89917 2.67946 9.38864C2.95994 11.6985 4.79129 13.6123 7.08461 14C8.75923 14.2805 10.3348 13.769 11.4898 12.7791L11.7125 13.0101V13.6618L15.2185 17.1678C15.5567 17.506 16.1094 17.506 16.4476 17.1678C16.7858 16.8296 16.7858 16.2768 16.4476 15.9386L12.9499 12.4244ZM8.00029 12.4244C5.9462 12.4244 4.28808 10.7663 4.28808 8.7122C4.28808 6.65811 5.9462 4.99999 8.00029 4.99999C10.0544 4.99999 11.7125 6.65811 11.7125 8.7122C11.7125 10.7663 10.0544 12.4244 8.00029 12.4244Z"
      fill={fill}
    />
  </svg>
)
export default SVGPainelSearch
