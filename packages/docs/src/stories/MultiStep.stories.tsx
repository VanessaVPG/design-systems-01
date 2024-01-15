import type { StoryObj, Meta } from '@storybook/react'

import { Box, MultiStep, MultiStepProps } from '@vanessa-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  decorators: [
    (Story) => {
      return (
        <Box tag={'label'} className="flex gap-2">
          {Story()}
        </Box>
      )
    },
  ],
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
