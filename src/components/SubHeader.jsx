import * as React from 'react';
import { Box, AppBar, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const NavButton = styled(Button)(() => ({
	minWidth: '0px',
  // width: '100%',
	padding: '0px',
  margin: '0px 0px',
  border: 'none',
  background: 'none',
  position: 'relative',
  display: 'flex',
  fontWeight: 400,
  fontSize: '14px',
  gap: '0.5rem',
  alignItems: 'center',
  // textAlign: 'center',

	'p': {
		margin: 0,
		position: 'relative',
		color: '#32292F',
	},

	'&::after': {
		position: 'absolute',
		content: '""',
		width: 0,
		left: 0,
		bottom: '-7px',
		background: '#6E7DAB',
		height: '2px',
		transition: '0.3s ease-out',
	},

	'&:hover': {
		background: 'none',
	},

	'&:hover p': {
		color: '#6E7DAB',
		transition: '0.5s ease-in-out',
	},

	'&:hover::after': {
		width: '100%',
	},
}))

const NavButtonActive = styled(Button)(() => ({
	minWidth: '0px',
	padding: '0px',
  margin: '0px 10px',
  border: 'none',
  background: 'none',
  position: 'relative',
  display: 'flex',
  fontWeight: 400,
  fontSize: '14px',
  gap: '0.5rem',
  alignItems: 'center',

	'p': {
		margin: 0,
		position: 'relative',
		color: '#6E7DAB',
	},

	'&::after': {
		position: 'absolute',
		content: '""',
		width: 0,
		left: 0,
		bottom: '-7px',
		background: '#6E7DAB',
		height: '2px',
		transition: '0.3s ease-out',
	},

	'&:hover': {
		background: 'none',
	},
}))

const collections = [
  'Daylight',
  'Dust',
  'Escape',
  'Illusion',
  'Mountains',
  'Nice Dream',
  'Rose Gold',
  'Stay',
  'Times',
  'Voyages'
]

export default function SubHeader ({ click, setClick }) {
  const galleries = [];

  collections.forEach((gallery) => {
    const name = gallery.toLowerCase().trim().replace(/\s/g, '');
    const link = gallery.trim().replace(/\s/g, '');
    galleries.push(
      <Grid item xs={1} sm={1} lg={1} display={'flex'} justifyContent={'center'} marginTop={'12px'} key={'item_' + name}>
        {
          click === link ?
          <NavButtonActive onClick={() => setClick(link)} color={'inherit'} id={'button_' + name} disableRipple={true}>
            <p>{gallery}</p>
          </NavButtonActive> :
          <NavButton onClick={() => setClick(link)} color={'inherit'} id={'button_' + name} disableRipple={true}>
            <p>{gallery}</p>
          </NavButton>
        }
      </Grid>
    )
  })

  return (
    <AppBar
      position={'static'}
      color={'inherit'}
      sx={{ boxShadow: '0px 0px 0px #e3e3e3' }}
    >
      <Box
        display={'block'}
        margin={'74px 10% 30px'}
      >
        <Grid container columns={{ xs: 2, sm: 5, lg: 10 }} gap={0} display={{ xs: '', sm: 'flex' }}>
          {galleries}
        </Grid>
      </Box>
    </AppBar>
  )
}
