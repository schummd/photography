import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';

// import FeaturedPost from './FeaturedPost';
// import listOfPosts from './posts/ListOfPosts';

const NavButton = styled(Button)(() => ({
	minWidth: '0px',
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

const categories = ['all', 'travel', 'university', 'life', 'something']

function Categories ({ click, setClick }) {
  const posts = [];

  categories.forEach((category) => {
    const name = category.toLowerCase().trim().replace(/\s/g, '');
    const link = category.trim().replace(/\s/g, '');
    posts.push(
      <Grid item xs={1} sm={1} lg={1} sx={{ marginTop: '12px', display: 'flex', justifyContent: 'center', backgroundColor: '' }} key={'item_' + name}>
        {
          click === link ?
          <NavButtonActive onClick={() => setClick(link)} color='inherit' id={'button_' + name} disableRipple={true}>
            <p>{category}</p>
          </NavButtonActive> :
          <NavButton onClick={() => setClick(link)} color='inherit' id={'button_' + name} disableRipple={true}>
            <p>{category}</p>
          </NavButton>
        }
      </Grid>
    )

  })

  return (
    <>
      <AppBar
        position='static'
        color='inherit'
        sx={{ boxShadow: '0px 0px 0px #e3e3e3', backgroundColor: '' }}
      >
        <Box
          sx={{ display: 'block', margin: '74px 10% 30px', backgroundColor: '' }} // original 86px 10% 30px
        >
          <Grid container columns={{ xs: 2, sm: 5, lg: 10 }} gap={0} sx={{ display: { xs: '', sm: 'flex' } }}>
            {posts}
          </Grid>
        </Box>
      </AppBar>
    </>
  )
}

export default Categories;
