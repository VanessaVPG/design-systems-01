import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@vanessa-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    tag: 'default',
  },
}

export const Strong: StoryObj<TextProps> = {
  args: {
    tag: 'strong',
  },
}

export const Span: StoryObj<TextProps> = {
  args: {
    tag: 'span',
  },
}
