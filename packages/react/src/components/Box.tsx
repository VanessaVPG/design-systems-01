import { Text } from './Text'

export type BoxProps = {
  children: React.ReactNode
}

export function Box() {
  return (
    <div className="p-4 rounded-md bg-gray-800 border-1 border-gray-600">
      <Text tag="default" variants="md">
        Talvez esse teste não funcione... ou talvez sim ;D
      </Text>
    </div>
  )
}
