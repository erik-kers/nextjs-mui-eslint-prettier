import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import useNavigationStore from '@/stores/navigation'
import Link from 'next/link'
import { useRouter } from 'next/router'

const drawerWidth = 240

export default function SideBar(): JSX.Element {
  const { sideBarOpen, toggleSideBar, pages } = useNavigationStore(
    (state) => state
  )
  const { pathname } = useRouter()

  const drawer = (
    <div>
      <List>
        {pages.map(({ label, href }) => (
          <Link href={href} passHref key={label}>
            <ListItem button selected={pathname === href}>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="Huvudmeny"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        hideBackdrop
        variant="temporary"
        transitionDuration={100}
        open={sideBarOpen}
        onClick={toggleSideBar}
        onClose={toggleSideBar}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        anchor="top"
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100vw',
            height: `100vh`,
            paddingTop: '6em',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            paddingTop: '6em',
            backgroundColor: 'common.white',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
