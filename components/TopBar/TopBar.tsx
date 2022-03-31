import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme } from '@mui/material'
import React from 'react'
import useNavigationStore from '@/stores/navigation'

const drawerWidth = 240

export default function TopBar(): JSX.Element {
  const { toggleSideBar, sideBarOpen } = useNavigationStore((state) => state)
  const theme = useTheme()

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 'none',
        backgroundColor: 'common.white',
        color: 'common.black',
        zIndex: theme.zIndex.drawer + 1,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar variant="dense">
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <IconButton
            edge="start"
            onClick={toggleSideBar}
            sx={{ mr: 2, display: { sm: 'none' } }} // sx={{ mr: 2, display: { sm: 'none' } }}
          >
            {sideBarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Some project name
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
