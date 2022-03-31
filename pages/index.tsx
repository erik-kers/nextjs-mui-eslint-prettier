import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import SchoolIcon from '@mui/icons-material/School'
import AssignmentIcon from '@mui/icons-material/Assignment'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import PersonIcon from '@mui/icons-material/Person'
import Link from 'next/link'

export default function Home(): JSX.Element {
  return (
    <Grid container sx={{ marginTop: '2em' }} rowSpacing={6} columnSpacing={1}>
      <Grid item sm={12}>
        <Typography variant="h4">Some heading</Typography>
      </Grid>
    </Grid>
  )
}
