import * as RadixAvatar from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'

export type AvatarProps = {
  src?: string
  alt?: string
}

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <RadixAvatar.Root className="rounded-full w-16 h-16 overflow-hidden">
      <RadixAvatar.Image
        src={src}
        alt={alt}
        className="rounded-full w-12 h-12"
      />
      <RadixAvatar.Fallback
        delayMs={600}
        className="w-full h-full flex items-center justify-center bg-gray600 text-gray800"
      >
        <User size={24} />
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
