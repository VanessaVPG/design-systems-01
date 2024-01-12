import clsx from 'clsx'
import React from 'react'

export type HeadingProps = {
  variants?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'

  tag?: 'default' | 'h1' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9'
  children?: React.ReactNode
}

export function Heading({ variants, tag, children }: HeadingProps) {
  const Tag = tag || 'default'
  return React.createElement(
    Tag,
    {
      className: clsx('font-default leading-md m-0 text-gray-100', {
        'text-xl': variants === 'sm',
        'text-2xl': variants === 'md',
        'text-3xl': variants === 'lg',
        'text-4xl': variants === 'xl',
        'text-5xl': variants === '2xl',
        'text-6xl': variants === '3xl',
        'text-7xl': variants === '4xl',
        'text-8xl': variants === '5xl',
        'text-9xl': variants === '6xl',
      }),
    },
    children,
  )
}
