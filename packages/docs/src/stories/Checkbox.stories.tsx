import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, Checkbox } from '@vanessa-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
} as Meta

export const Primary: StoryObj = {
  decorators: [
    (Story) => {
      return (
        <Box tag={'label'} className="flex gap-2">
          {Story()}
          <Text variants="sm">Accept terms</Text>
        </Box>
      )
    },
  ],
}
