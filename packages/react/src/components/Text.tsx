import clsx from 'clsx'
import React from 'react'

export type TextProps = {
  variants?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'

  tag?: 'p' | 'strong' | 'span'
  children?: React.ReactNode
}

export function Text({ variants, tag, children }: TextProps) {
  const Tag = tag || 'p'

  return React.createElement(
    Tag,
    {
      className: clsx('font-default leading-md m-0 text-gray100', {
        'text-xxs': variants === 'xxs',
        'text-xs': variants === 'xs',
        'text-sm': variants === 'sm',
        'text-md': variants === 'md',
        'text-lg': variants === 'lg',
        'text-xl': variants === 'xl',
        'text-2xl': variants === '2xl',
        'text-3xl': variants === '3xl',
        'text-4xl': variants === '4xl',
        'text-5xl': variants === '5xl',
        'text-6xl': variants === '6xl',
        'text-7xl': variants === '7xl',
        'text-8xl': variants === '8xl',
        'text-9xl': variants === '9xl',
      }),
    },
    children,
  )
}
