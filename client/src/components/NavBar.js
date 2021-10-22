import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { motion, useMotionValue, useTransform } from 'framer-motion'



const drawerWidth = 120;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>

      <Box sx={{ display: 'flex', overflow: 'contain'}}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            boxShadow: 'none',
            background: 'transparent',
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <Box style={{ background: 'black', height: '30vh', width: '100vw' }}>
              <Typography variant="h1" sx={{fontSize: {xs: '5rem', s: '', lg: '4.6rem'}, fontFamily: 'MuseoModerno', position: 'absolute', mt: '5.3vh', ml: '1.7vw', fontWeight: 0, color: '#F38EFF'}} >Tz</Typography>
              <Typography variant="h1" sx={{fontSize: {xs: '4.5rem', sm: '4rem'}, fontFamily: 'MuseoModerno', position: 'relative', marginTop: '5vh', marginLeft: '3vw', color: '#FF00C8', fontWeight: 0 }}>Tz</Typography>
            </Box>

            <Divider />
            <motion.span whileHover={{ color: ['#fff', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF'], scale: 1.2, x: 9, transition: { type: 'spring', damping: 1, stiffness: 100 } }} style={{ marginTop: '20vh', marginLeft: '3vw', fontFamily: 'MuseoModerno' }} >
              <Link href='#about' style={{ textDecoration: 'none', marginTop: '0vh', marginLeft: 'vw', fontFamily: 'MuseoModerno', color: 'white' }} >aboutMe</Link>
            </motion.span>
            <Divider />
            
            <motion.span whileHover={{ color: ['#fff', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF'], scale: 1.2, x: 11, transition: { type: 'spring', damping: 1, stiffness: 100 } }} style={{ marginTop: '1vh', marginLeft: '3vw', fontFamily: 'MuseoModerno' }} >
            <Link href='#skills' style={{ textDecoration: 'none', marginTop: '0vh', marginLeft: 'vw', fontFamily: 'MuseoModerno', color: 'white' }} >skills</Link>
            </motion.span>
            
            <Divider />
            <motion.span whileHover={{ color: ['#fff', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF'], scale: 1.2, x: 11, transition: { type: 'spring', damping: 1, stiffness: 100 } }} style={{ marginTop: '1vh', marginLeft: '3vw', fontFamily: 'MuseoModerno' }} >
            <Link href='#Contact' style={{ textDecoration: 'none', marginTop: '0vh', marginLeft: 'vw', fontFamily: 'MuseoModerno', color: 'white' }} >contact</Link>
            </motion.span>
            <Divider />
          </Drawer>
          <Drawer
            variant="permanent"
            
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, overflow: 'hidden' },
            }}
            open
          >
            <Box style={{ background: 'black', height: '10vh', width: '100vw' }}>
              <Typography variant="h1" style={{ fontFamily: 'MuseoModerno', position: 'absolute', marginTop: '2.5vh', marginLeft: '1.3vw', color: '#F38EFF', fontWeight: 0, fontSize: '5em' }}>Tz</Typography>
              <Typography variant="h1" style={{ fontFamily: 'MuseoModerno', position: 'absolute', marginTop: '2vh', marginLeft: '.8vw', color: '#FF00C8', fontWeight: 0, fontSize: '5em' }}>Tz</Typography>
              <Typography vairant='body' style={{ fontFamily: 'MuseoModerno', color: '#F2F4F6', position: 'absolute', marginTop: '13.5vh', marginLeft: '1.3vw' }}>developer</Typography>
            </Box>
            
            <motion.span whileHover={{ color: ['#fff', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF'], scale: 1.2, x: 9, transition: { type: 'spring', damping: 1, stiffness: 100 } }} style={{ marginTop: '30vh', marginLeft: '.8vw', fontFamily: 'MuseoModerno' }} >
            <hr style={{color: 'gray', width: '150%', marginLeft: '-1vw', overflow: 'hidden', opacity: '.3'}} />
            <Link href='#about' style={{ textDecoration: 'none', marginTop: '0vh', marginLeft: 'vw', fontFamily: 'MuseoModerno', color: 'white' }} >aboutMe</Link>
            <hr style={{color: 'gray', width: '150%', marginLeft: '-1vw', opacity: "0.3"}} />
            </motion.span>
            <Divider />
            <motion.span whileHover={{ color: ['#fff', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF'], scale: 1.2, x: 11, transition: { type: 'spring', damping: 1, stiffness: 100 } }} style={{ marginTop: '0vh', marginLeft: '.8vw', fontFamily: 'MuseoModerno' }} >
            
            <Link href='#skills' style={{ textDecoration: 'none', marginTop: '0vh', marginLeft: 'vw', fontFamily: 'MuseoModerno', color: 'white' }} >skills</Link>
              <hr style={{color: 'gray', width: '150%', marginLeft: '-4vw', opacity: '.3'}} />
            </motion.span>
            <Divider />
            <motion.span whileHover={{ color: ['#fff', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF', '#F38EFF'], scale: 1.2, x: 11, transition: { type: 'spring', damping: 1, stiffness: 100 } }} style={{ marginTop: '0vh', marginLeft: '.8vw', fontFamily: 'MuseoModerno' }} >
            
            <Link href='#Contact' style={{ textDecoration: 'none', marginTop: '0vh', marginLeft: 'vw', fontFamily: 'MuseoModerno', color: 'white' }} >contact</Link>
              <hr style={{color: 'gray', width: '180%', marginLeft: '-4vw', opacity: '.3'}} />
            </motion.span>
            <Divider />
          </Drawer>
        </Box>

      </Box>
    </>
  );
}


export default NavBar;