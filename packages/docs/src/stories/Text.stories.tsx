import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@vanessa-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tag: 'p',
  argTypes: {
    variants: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    children: 'Default',
  },
}

export const Strong: StoryObj<TextProps> = {
  args: {
    children: 'Strong',
    tag: 'strong',
  },
}

export const Span: StoryObj<TextProps> = {
  args: {
    children: 'Span',
    tag: 'span',
  },
}
