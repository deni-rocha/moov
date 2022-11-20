import * as React from 'react'

interface PropSVG {
  width: number
  height: number
  className: string
}
const SVGPainelDataCorrect = ({
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
    <path d="M7.12849 0.355469C3.38924 0.355469 0.354492 3.39022 0.354492 7.12947C0.354492 10.8687 3.38924 13.9035 7.12849 13.9035C10.8677 13.9035 13.9025 10.8687 13.9025 7.12947C13.9025 3.39022 10.8677 0.355469 7.12849 0.355469ZM5.77369 10.5165L2.38669 7.12947L3.34183 6.17433L5.77369 8.59943L10.9152 3.45796L11.8703 4.41987L5.77369 10.5165Z" />
  </svg>
)
export default SVGPainelDataCorrect
