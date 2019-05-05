import { css } from "styled-components"

const sizes: any = {
  lg: 992,
  md: 768,
  sm: 576
}

export const media = Object.keys(sizes).reduce((acc: any, label) => {
  acc[label] = (...args: any) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      //@ts-ignore
      ${css(...args)}
    }
  `

  return acc
}, {})
