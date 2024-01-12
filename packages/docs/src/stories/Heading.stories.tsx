import type { StoryObj, Meta } from '@storybook/react'

import { Heading, HeadingProps } from '@vanessa-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {
    tag: 'default',
    variants: 'xl',
    children: 'Heading',
  },
}
export const H1: StoryObj<HeadingProps> = {
  args: {
    tag: 'h3',
    children: 'Heading 3',
  },
}

export const H3: StoryObj<HeadingProps> = {
  args: {
    tag: 'h3',
    children: 'Heading 3',
  },
}

export const H4: StoryObj<HeadingProps> = {
  args: {
    tag: 'h4',
    children: 'Heading 4',
  },
}
export const H5: StoryObj<HeadingProps> = {
  args: {
    tag: 'h5',
    children: 'Heading 5',
  },
}
export const H6: StoryObj<HeadingProps> = {
  args: {
    tag: 'h6',
    children: 'Heading 6',
  },
}
