export type TextAreaProps = {
  children: React.ReactNode
  disabled?: boolean
  placeholder?: string
}

export function TextArea({ disabled = false, placeholder }: TextAreaProps) {
  return (
    <textarea
      disabled={disabled}
      placeholder={placeholder}
      className="bg-gray900 py-3 px-4 rounded-sm box-border border-2 border-gray900 font-default text-sm text-white min-h-80 font-regular resize-y focus:outline-none focus:border-allports300 w-full disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray400"
    />
  )
}
