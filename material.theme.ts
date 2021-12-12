import { createTheme } from '@mui/material'

const defaultTheme = createTheme({
  header: {
    default: 'white',
    hover: '#fcc43f',
    transition: 'all 0.3s ease-in-out 0s'
  },
  typography: {
    fontFamily: ['Montserrat', 'Roboto', 'sans-serif'].join(',')
  },
  palette: {
    primary: {
      main: '#244B9C'
    }
  }
})

export default defaultTheme
