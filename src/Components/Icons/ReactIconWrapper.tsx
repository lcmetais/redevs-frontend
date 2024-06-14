import { createElement } from 'react'
import { IconType } from 'react-icons'

type Props = {
  color?: string
  size?: number
  icon: IconType
}

/**
 * This function aims to wrap any react icon with our default color, size and provide props to customize it
 */
export function ReactIconWrapper({
  icon,
  size = 24,
  color = '#98A2B3'
}: Props) {
  return createElement(icon, {
    stroke: color,
    size
  })
}
