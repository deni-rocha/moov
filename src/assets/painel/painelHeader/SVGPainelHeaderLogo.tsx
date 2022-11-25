import * as React from 'react'

interface PropSVG {
  width: number
  height: number
  className: string
}
const SVGPainelHeaderLogo = ({
  width,
  height,
  className
}: PropSVG): JSX.Element => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 38 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_694_8761)">
      <circle cx="19" cy="17.5" r="17.5" fill="white" />
    </g>
    <path
      d="M17.0106 12.0883C14.9081 14.6273 13.6386 17.8406 12.0915 19.8638C11.0904 21.1729 10.7823 22.6011 12.2501 23.6722C13.5503 24.5411 14.3323 24.3445 15.8205 22.6804C17.0503 21.2126 19.1132 20.5177 20.581 21.1332C21.8108 21.649 21.8504 22.2837 23.2389 23.6325C23.9133 24.1879 24.8786 24.4259 25.9365 23.5531C27.5233 22.244 26.5712 20.0225 25.1431 18.9514C23.715 17.8802 21.6521 17.2829 20.4223 18.0786C19.7479 18.515 18.9941 18.6935 18.2801 18.396C17.328 17.9993 17.1296 16.5711 17.6453 15.9364C18.2404 15.024 19.5099 15.385 21.057 15.024C22.2471 14.7463 21.7711 13.2388 21.057 12.0883C20.2636 10.5809 18.6768 10.2238 17.0106 12.0883Z"
      fill="url(#paint0_linear_694_8761)"
    />
    <defs>
      <filter
        id="filter0_d_694_8761"
        x="0.639856"
        y="0"
        width="36.7203"
        height="36.7203"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="0.860144" />
        <feGaussianBlur stdDeviation="0.430072" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_694_8761"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_694_8761"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_694_8761"
        x1="8.86268"
        y1="8.87927"
        x2="24.1885"
        y2="28.4042"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#30D4FF" />
        <stop offset="0.21875" stopColor="#5088FF" />
        <stop offset="0.329677" stopColor="#6E40FF" />
        <stop offset="0.458333" stopColor="#9B34AD" />
        <stop offset="0.552083" stopColor="#BC2C72" />
        <stop offset="0.630208" stopColor="#D72440" />
        <stop offset="0.731762" stopColor="#FB1B00" />
        <stop offset="0.833333" stopColor="#FA6200" />
        <stop offset="0.931194" stopColor="#F9A600" />
      </linearGradient>
    </defs>
  </svg>
)
export default SVGPainelHeaderLogo
