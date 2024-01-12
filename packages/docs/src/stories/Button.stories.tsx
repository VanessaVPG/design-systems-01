import type { StoryObj, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@vanessa-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
} as Meta<ButtonProps>

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'medium',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
