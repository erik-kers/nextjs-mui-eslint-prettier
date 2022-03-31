import React, { useEffect, useState } from 'react'
import TopBar from '@/components/TopBar'
import { Box, Container, CssBaseline, Typography } from '@mui/material'
import Head from 'next/head'
import SideBar from '@/components/SideBar'
import useNavigationStore from '@/stores/navigation'
import { useRouter } from 'next/router'

type LayoutProps = {
  children: React.ReactNode
}

const drawerWidth = 240

export default function Layout({ children }: LayoutProps): JSX.Element {
  const { pathname } = useRouter()
  const { setActivePage, pages } = useNavigationStore((state) => state)
  const [pageName, setPageName] = useState<string>('')

  useEffect(() => {
    const newPage = pages.find(({ href }) => href === pathname)

    if (newPage) {
      setActivePage(newPage.href)
      setPageName(newPage.label)
    }
  }, [pages, pathname, setActivePage])

  return (
    <>
      <Head>
        <title>TYA {pageName}</title>
      </Head>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <TopBar />
        <SideBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Container maxWidth="md" component="main" sx={{ my: 8 }}>
            <Typography variant="h1">{pageName}</Typography>
            {children}
          </Container>
        </Box>
      </Box>
    </>
  )
}
