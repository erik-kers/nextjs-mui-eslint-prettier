import { Box, Link, Typography } from '@mui/material'

export default function Custom500(): JSX.Element {
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
        Something went awry (500)
      </Typography>
      <Typography variant="h4" color="black" gutterBottom>
        Some 505 text...
      </Typography>
    </Box>
  )
}
