import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import theme from '~/material.theme'
import seoConfig from '~/next-seo.config'
import '~/styles/fonts.css'
import '~/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seoConfig} />

      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    </>
  )
}

export default MyApp
