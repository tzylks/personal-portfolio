import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: 'rgba(21,21,22,0.69)',
      },
      secondary: {
        main: '#76ff03',
      },
      background: {
        default: '#252424',
        paper: '#ff6d00',
      },
      error: {
        main: '#ff0004',
      },
    }
})

export default theme