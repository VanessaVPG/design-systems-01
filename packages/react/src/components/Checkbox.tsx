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
        'w-6 h-6 rounded-xs leading-[0] cursor-pointer box-border flex items-center justify-center transition-all  border-2 border-gray900 focus:border-allports300',
        {
          'bg-allports300': isChecked,
          'bg-gray900': !isChecked,
        },
      )}
    >
      <RadixCheckbox.Indicator
        asChild
        className="text-white w-4 h-4 transition-all"
      >
        <Check weight="bold" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}
