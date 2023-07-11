import { keyframes } from 'styled-components'

export const topToBottom = keyframes`
  0% {
    transform: translateY(-40px);
  }
  50% {
    transform: translateY(200px);
  }
  100% {
    transform: translateY(-40px);
  }
`

export const scale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(1);
  }
`

export const showElement = keyframes`
  to {
    opacity: 1;
    transform: translateY(0px) scale(1) skewY(0deg);
  }
`
