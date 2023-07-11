import { keyframes } from 'styled-components'

export const styledHomeAnimation = keyframes`
  to {
    transform: translateY(0px);
  }
`

export const greetingAnimation = keyframes`
  to {
    opacity: 1;
    transform: translateY(0px) translateX(0px);
  }
`

export const imageAnimation = keyframes`
  to {
    opacity: 1;
    transform: translateY(0px) scale(1) rotate(0deg);
  }
`

export const nameAnimation = keyframes`
  to {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
`

export const showElement = keyframes`
    to {
    opacity: 1;
  }
`
