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
        default: '#1d1d1d',
        paper: '#181818',
      },
      error: {
        main: '#ff0004',
      },
      text: {
        primary: '#ffffff',
      },
    }
})

export default theme