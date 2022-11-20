import * as React from 'react'

interface PropSVG {
  width: number
  height: number
  className: string
}
const SVGPainelDataExclamation = ({
  width,
  height,
  className
}: PropSVG): JSX.Element => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.12849 0.355469C3.38924 0.355469 0.354492 3.39022 0.354492 7.12947C0.354492 10.8687 3.38924 13.9035 7.12849 13.9035C10.8677 13.9035 13.9025 10.8687 13.9025 7.12947C13.9025 3.39022 10.8677 0.355469 7.12849 0.355469ZM7.80589 10.5165H6.45109V9.16167H7.80589V10.5165ZM7.80589 7.80687H6.45109V3.74247H7.80589V7.80687Z" />
  </svg>
)
export default SVGPainelDataExclamation
