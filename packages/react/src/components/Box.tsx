import { ComponentProps } from 'react'

export type BoxProps = ComponentProps<typeof Box>

export function Box() {
  return (
    <div className="p-4 rounded-md bg-gray-800 border-1 border-gray-600">
      Box
    </div>
  )
}
