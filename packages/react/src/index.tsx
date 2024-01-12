import './index.css'
import clsx from 'clsx'
export * from './components/Box'

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
}

export const Button = ({ size }: ButtonProps) => {
  return (
    <button
      className={clsx('bg-ignite700 font-default text-white rounded-lg p-4', {
        'text-2xl': size === 'large',
        'text-xl': size === 'medium',
        'text-lg': size === 'small',
      })}
    >
      Consegui!!!
    </button>
  )
}
