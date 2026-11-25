import React from 'react';

export default function MushroomIcon({ size = 24, strokeWidth = 2, className, ...props }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M3 10a9 7 0 0 1 18 0v1H3z" />
      <path d="M9 11v5.5a3 3 0 0 0 6 0V11" />
      <path d="M5.5 20h13" />
      <circle cx="8" cy="7.5" r=".6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="5.5" r=".6" fill="currentColor" stroke="none" />
      <circle cx="16" cy="7.5" r=".6" fill="currentColor" stroke="none" />
    </svg>
  );
}
