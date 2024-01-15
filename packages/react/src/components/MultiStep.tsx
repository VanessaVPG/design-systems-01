import clsx from 'clsx'
import { Text } from './Text'

export type MultiStepProps = {
  size?: number
  currentStep?: number
}

export function MultiStep({ size = 0, currentStep = 1 }: MultiStepProps) {
  return (
    <div className="w-full">
      <Text className="text-gray200" variants="xs">
        Passo {currentStep} de {size}
      </Text>

      <div className={`grid grid-cols-${size} gap-2 mt-1`}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => {
          return (
            <div
              key={step}
              className={clsx('h-1 rounded-px bg-gray600', {
                'bg-gray100': currentStep >= step,
              })}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
