import * as React from "react"

const ArrowIcon = (props) => (
  <svg
    width={37}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.25 27.75 34 15 21.25 2.25M34 15H0"
      stroke="#343434"
      strokeWidth={4}
    />
  </svg>
)

export default ArrowIcon
