import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextArea, TextAreaProps } from '@vanessa-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your observations',
  },
  decorators: [
    (Story) => {
      return (
        <Box tag={'label'} className="flex flex-col gap-2">
          <Text variants="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
}
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
