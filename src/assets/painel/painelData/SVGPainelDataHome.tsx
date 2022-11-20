import * as React from 'react'

interface PropSVG {
  fill: string
  width: number
  height: number
  className: string
}
const SVGPainelDataHome = ({
  fill,
  width,
  height,
  className
}: PropSVG): JSX.Element => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_704_8077)">
      <path
        d="M6.77545 3.50262L9.25985 5.73859V9.61923H8.26609V6.63794H5.28481V9.61923H4.29104V5.73859L6.77545 3.50262ZM6.77545 2.16602L1.80664 6.63794H3.29728V10.613H6.27857V7.6317H7.27233V10.613H10.2536V6.63794H11.7443L6.77545 2.16602Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_704_8077">
        <rect
          width="11.9251"
          height="11.9251"
          fill="white"
          transform="translate(0.8125 0.675781)"
        />
      </clipPath>
    </defs>
  </svg>
)
export default SVGPainelDataHome
