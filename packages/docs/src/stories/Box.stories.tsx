import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps } from '@vanessa-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: 'Box',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    tag: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
