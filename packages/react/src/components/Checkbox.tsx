import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import clsx from 'clsx'
import { useState } from 'react'

export function Checkbox() {
  const [isChecked, setIsChecked] = useState(false)
  const handleCheck = () => {
    setIsChecked(!isChecked)
  }
  return (
    <RadixCheckbox.Root
      onClick={() => {
        handleCheck()
      }}
      checked={isChecked}
      className={clsx(
        'w-6 h-6 bg-gray900 rounded-xs leading-[0] cursor-pointer box-border flex items-center justify-center transition-all border-2 border-gray900 focus:border-ignite300',
        {
          'bg-ignite300': isChecked,
        },
      )}
    >
      <RadixCheckbox.Indicator
        asChild
        className="text-white w-4 h-4 transition-all animate-checkmark"
      >
        <Check weight="bold" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}
