import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@vanessa-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/vanessavpg.png',
    alt: 'Avatar de Vanessa',
  },
}
