import * as React from "react";

function SvgLocationMarkerIcon(props) {
  return (
    <svg width={16} height={21} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M-4-1h24v24H-4z" />
        <path
          d="M15.138 8.241c0 5.404-6.886 12.52-6.886 12.52s-6.907-7.116-6.907-12.52a6.897 6.897 0 0113.793 0z"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.31 6.935a2.069 2.069 0 11-4.137 0 2.069 2.069 0 014.137 0"
          fill="#009688"
        />
        <path
          d="M10.31 6.935a2.069 2.069 0 11-4.137 0 2.069 2.069 0 014.137 0z"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default SvgLocationMarkerIcon;
