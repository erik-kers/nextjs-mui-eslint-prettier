import { Box, Link, Typography } from '@mui/material'

export default function Custom404(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'primary.main',
        width: '100%',
        my: 12,
      }}
    >
      <Typography variant="h1" color="black" gutterBottom>
        Couldn't find the requested page (404)
      </Typography>
      <Typography variant="h4" color="black" gutterBottom>
        Some 404 text...
      </Typography>
    </Box>
  )
}
