import clsx from 'clsx'

export type ButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  size?: 'small'
  children?: React.ReactNode
}

export const Button = ({
  size,
  variant,
  children,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        ' rounded-sm text-sm font-medium text-center min-w-[120px] font-default box-border flex justify-center items-center gap-2 cursor-pointer p-4 h-12 disabled:cursor-not-allowed',
        {
          'text-white bg-allports500 transition-all disabled:bg-gray200 not-disabled-hover:bg-allports300':
            variant === 'primary',
          'text-allports300 bg-transparent border-2 border-allports500 not-disabled-hover:bg-allports500 disabled:bg-gray200 disabled:border-gray200':
            variant === 'secondary',
          'text-gray100 not-disabled-hover:text-white disabled:text-gray600':
            variant === 'tertiary',
          'h-9': size === 'small',
          'disabled:bg-gray200 text-white': disabled === true,
        },
      )}
    >
      {children}
    </button>
  )
}
