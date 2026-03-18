// src/components/Skeleton.jsx
import React from 'react'

export default function Skeleton({ width = '100%', height = 20, style = {}, className = '', variant = 'rectangular' }) {
  const borderRadius = variant === 'circular' ? '50%' : 'var(--radius-md)'
  return (
    <div
      className={`skeleton-pulse ${className}`}
      style={{
        width,
        height,
        borderRadius,
        background: 'var(--bg-hover)',
        ...style
      }}
    />
  )
}
