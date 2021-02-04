import React from "react";

import "./SvgIcon.css";

export default function SvgIcon({
  name,
  color,
  onClick = () => {
    return;
  },
  className = "",
  disabled = false
}) {
  return (
    <div
      className={`svg-icon ${name} ${color} ${className}`}
      onClick={(e) => {
        if (!disabled) {
          onClick(e);
        }
      }}
    />
  );
}
