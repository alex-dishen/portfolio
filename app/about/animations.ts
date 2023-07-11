import { keyframes } from 'styled-components'

export const showElement = keyframes`
  to {
    opacity: 1;
    transform: translateY(0) scale(1) skewY(0deg);
  }
`

export const moveUp = keyframes`
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`
