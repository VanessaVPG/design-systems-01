export type TextInputProps = {
  prefix?: string
  children: React.ReactNode
  disabled?: boolean
  placeholder?: string
}

export function Prefix({ children }: TextInputProps) {
  return (
    <span className="font-default text-sm text-gray400 font-regular">
      {children}
    </span>
  )
}

export function TextInput({
  prefix,
  disabled = false,
  placeholder,
  ...props
}: TextInputProps) {
  return (
    <div className="bg-gray900 py-3 px-4 rounded-sm box-border flex items-baseline border-2 border-gray900 focus-within:border-allports300 has-disabled:opacity-50 has-disabled:cursor-not-allowed">
      {!!prefix && <Prefix>{prefix}</Prefix>}{' '}
      <input
        {...props}
        disabled={disabled}
        placeholder={placeholder}
        type="text"
        className="font-default text-sm text-white font-regular bg-transparent outline-none w-full flex-1 focus:outline-none pl-1 disabled:cursor-not-allowed placeholder:text-gray400"
      />
    </div>
  )
}
