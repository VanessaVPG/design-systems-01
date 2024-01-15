import React from 'react'

export type BoxProps = {
  children: React.ReactNode
  tag?: string
  className?: string
}

export function Box({ children, tag = 'div', className }: BoxProps) {
  const Tag = tag || 'div'
  return React.createElement(
    Tag,
    {
      className: `p-4 rounded-md bg-gray800 border-1 border-gray600 ${className}`,
    },
    children,
  )
}
