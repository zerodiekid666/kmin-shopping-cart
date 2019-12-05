import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box, Icon } from '@material-ui/core'
export default function Nav() {
  const style ={
    color:'white',
    textDecoration:'none'
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Icon edge="start" color="inherit" aria-label="menu">
            
          </Icon>
          <Typography variant="h6">
            Kmin Fash
          </Typography>
          <Box ml="auto">
            <Button><Link style={style} to='/product'>Products</Link></Button>
            <Button><Link style={style} to='/detail'>Detail</Link></Button>
            <Button><Link style={style} to='/cart'>Cart</Link></Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}
