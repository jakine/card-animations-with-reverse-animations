import * as React from "react";

const HeartShape = (props) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    
  >
    <path
      d="M923.381 81.2308L906.789 64.6352C824.63 -17.5451 691.581 -17.5451 609.581 64.6352L493.92 180.326L378.259 64.6352C296.1 -17.5451 163.051 -17.5451 81.0511 64.6352L64.6193 81.2308C-17.5398 163.411 -17.5398 296.495 64.6193 378.516L345.396 659.365C427.555 741.545 560.605 741.545 642.604 659.365L923.381 378.516C1005.54 296.495 1005.54 163.411 923.381 81.2308Z"
      stroke="white"
      strokeOpacity="0.14"
    />
  </svg>
);
HeartShape.defaultProps={
  viewBox:"0 0 988 724",
  width:"988",
  height:"724",
}

export default HeartShape;
