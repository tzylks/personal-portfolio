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
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


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
  
    <Box sx={{ display: 'flex' }}>
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
              <Typography variant="h1" style={{fontFamily: 'MuseoModerno', position: 'absolute', marginTop: '5.3vh', marginLeft: '1.7vw', fontWeight: 800, color: 'white' }}>Tz</Typography>
              <Typography variant="h1" style={{fontFamily: 'MuseoModerno', position: 'relative', marginTop: '5vh', marginLeft: '.9vw', color: 'green', fontWeight: 800}}>Tz</Typography>
            </Box>
          <List>
            <ListItem button>
              <Box style={{ marginLeft: '7vw', marginTop: '40vh' }}>
                <ListItemText>
                  Hi
                </ListItemText>
              </Box>
            </ListItem>
          </List>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
           <Box style={{ background: 'black', height: '30vh', width: '100vw'}}>
              <Typography variant="h1" style={{fontFamily: 'MuseoModerno', position: 'absolute', marginTop: '2.2vh', marginLeft: '1.3vw', color: '#F7FD04', fontWeight: 0, fontSize: '5em' }}>Tz</Typography>
              <Typography variant="h1" style={{fontFamily: 'MuseoModerno', position: 'absolute', marginTop: '2vh',  marginLeft: '.8vw', color: '#FC5404', fontWeight: 0, fontSize: '5em'}}>Tz</Typography>
            </Box>
          <List>
            <Box style={{ marginLeft: '2vw', marginTop: '15vh' }}>
              <ListItem button style={{ marginRight: '4vw' }}>
                <ListItemText> Hi </ListItemText>
              </ListItem>
            </Box>
          </List>
        </Drawer>
      </Box>

    </Box>
    </>
  );
}


export default NavBar;