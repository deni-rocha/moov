import * as React from 'react'

interface PropSVG {
  width: number
  height: number
  className: string
}
const SVGPainelDataHome = ({
  width,
  height,
  className
}: PropSVG): JSX.Element => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 11 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.77545 1.50262L8.25985 3.73859V7.61923H7.26609V4.63794H4.28481V7.61923H3.29104V3.73859L5.77545 1.50262ZM5.77545 0.166016L0.806641 4.63794H2.29728V8.61299H5.27857V5.6317H6.27233V8.61299H9.25361V4.63794H10.7443L5.77545 0.166016Z" />
  </svg>
)
export default SVGPainelDataHome