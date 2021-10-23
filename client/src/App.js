import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar'
import { useState, useEffect } from 'react'
import { useTheme, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Me from './components/Me'
import AppBar from '@mui/material/AppBar'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import { motion } from 'framer-motion'


function App() {
  
  const [dark, setDark] = useState(false)

  const light = {
    palette: {
      type: 'light',
      primary: {
        main: 'rgba(21,21,22,0.69)',
      },
      secondary: {
        main: '#76ff03',
      },
      background: {
        default: '#1f1f1f',
        paper: '#000',
        
      },
      error: {
        main: '#FF00C8',
      },
      text: {
        primary: '#fff',
      },
      typography: {
        fontFamily: 'Permanent Marker, cursive'
      },
    }
  }
  
  const darkTheme = {
    palette: {
      type: 'dark',
      primary: {
        main: 'rgba(21,21,22,0.69)',
      },
      secondary: {
        main: '#76ff03',
      },
      background: {
        default: '#A3F7BF',
        paper: '#000',
      },
      error: {
        main: '#FF00C8',
      },
      text: {
        primary: '#000',
      },
    }
  }

  const appliedTheme = createTheme(dark ? darkTheme : light);

  useEffect(() => {document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); }, [])


  
  
  return (
    <>
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
      
        <div style={{overflow: 'hidden'}}>

       

       
        <NavBar />
        <AboutMe />
        <Skills />
        <Contact />
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
