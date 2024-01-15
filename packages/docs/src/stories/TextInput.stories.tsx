import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextInput, TextInputProps } from '@vanessa-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
  decorators: [
    (Story) => {
      return (
        <Box tag={'label'} className="flex flex-col gap-2">
          <Text variants="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'devanessa.com/',
  },
}
