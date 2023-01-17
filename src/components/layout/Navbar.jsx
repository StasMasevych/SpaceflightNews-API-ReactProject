import * as React from 'react';
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



function Navbar() {
  return (
  
    <Box sx={{ display: 'flex', height:100,minWidth: 500}}>
        <AppBar position="static" sx={{background: 'linear-gradient(to left, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%)'}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop:3 }}>
              <Link to='/' className="nav__title">World Space News 👋🪐🚀</Link>
            </Typography>
            <div className="nav-links__container">
              <Link to='/' className="nav-links__item">Home</Link>
              <Link to='/bookmarks' className="nav-links__item">Bookmarks</Link>
              <Link to='/about' className="nav-links__item">About</Link>
              <Link to='/contact' className="nav-links__item">Contact</Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default Navbar




