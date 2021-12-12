import { CSSProperties } from 'react'
import { PartialDeep } from 'type-fest'

interface CustomOptions {
  header: {
    default: CSSProperties['color']
    hover: CSSProperties['color']
    transition: CSSProperties['transition']
  }
}

declare module '@mui/material/styles' {
  interface Theme extends CustomOptions {}

  interface ThemeOptions extends PartialDeep<CustomOptions> {}
}
