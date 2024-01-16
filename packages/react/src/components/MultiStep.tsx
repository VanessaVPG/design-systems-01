import clsx from 'clsx'
import { Text } from './Text'

export type MultiStepProps = {
  size?: number
  currentStep?: number
}

export function MultiStep({ size = 4, currentStep = 1 }: MultiStepProps) {
  return (
    <div className="w-full">
      <Text className="text-gray200" variants="xs">
        Passo {currentStep} de {size}
      </Text>

      <div
        className={clsx('grid gap-2 mt-1', {
          'grid-cols-1': size === 1,
          'grid-cols-2': size === 2,
          'grid-cols-3': size === 3,
          'grid-cols-4': size === 4,
          'grid-cols-5': size === 5,
          'grid-cols-6': size === 6,
          'grid-cols-7': size === 7,
          'grid-cols-8': size === 8,
          'grid-cols-9': size === 9,
          'grid-cols-10': size === 10,
          'grid-cols-11': size === 11,
          'grid-cols-12': size === 12,
        })}
      >
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
