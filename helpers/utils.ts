import { useState } from 'react'

export const range = (count: number) =>
  Array(count)
    .fill(0)
    .map((_, i) => i)

export const useToggle = (
  initialValue: boolean
): [boolean, (value?: boolean) => void] => {
  const [value, setValue] = useState(initialValue)

  const toggle = (value?: boolean) => {
    if (value !== undefined) {
      setValue(value)
    } else {
      setValue(!value)
    }
  }

  return [value, toggle]
}
