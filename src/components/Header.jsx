import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, AppBar, Drawer, IconButton, List, ListItem, Toolbar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavButton from './Button';
import Logo from '../assets/logo.png';

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
		fontFamily: 'Montserrat'
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

const DrawerNavButton = styled(Button)(() => ({
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
		color: '#32292F',
		fontFamily: 'Montserrat'
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
		// color: '#32292F',
		transition: '0.5s ease-in-out',
		// transition: 'none',
	},

	'&:hover::after': {
		width: '100%',
	},

	// '&:hover::after': {
	// 	width: '0%',
	// },
}))

export default function Header (props) {
	const navigate = useNavigate();
	const location = useLocation();
	const { window } = props;

  const [ mobileOpen, setMobileOpen ] = React.useState(false);
	// const [ activeLink, setActiveLink ] = React.useState('');
	const activeLink = props.activeLink;
	const setActiveLink = props.setActiveLink;

	console.log('active link:', activeLink)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

	const handleClick = (link) => {
		setActiveLink(link);
		navigate('/' + link);
	};

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
				<ListItem><DrawerNavButton onClick={() => navigate('/collections')} disableRipple={true}><p>Collections</p></DrawerNavButton></ListItem>
				<ListItem><DrawerNavButton onClick={() => navigate('/about')} disableRipple={true}><p>About</p></DrawerNavButton></ListItem>
				{/* <ListItem><DrawerNavButton onClick={() => navigate('/blog')} disableRipple={true}><p>Blog</p></DrawerNavButton></ListItem> */}
				<ListItem><DrawerNavButton onClick={() => navigate('/contact')} disableRipple={true}><p>Contact</p></DrawerNavButton></ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

	React.useEffect(() => {
		setActiveLink(location.pathname.substring(1));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box flexGrow={1}>
			<AppBar position={'fixed'} color={'inherit'} sx={{ boxShadow: '0px 0.3px 15px #e3e3e3' }}>
				<Toolbar sx={{ minHeight: '56px!important' }}>

					{/* logo */}
					<Box flexGrow={1}>
						<Box
							component={'img'}
							src={Logo}
							alt={'logo'}
							marginTop={'7px'}
							height={{ xs: '32px', sm: '38px' }}
							cursor={'pointer'}
							onClick={() => handleClick('')}
						/>
					</Box>

					{/* Toggle menu button on mobile screen */}
 					<IconButton
 						aria-label={'open drawer'}
 						edge={'start'}
 						onClick={handleDrawerToggle}
 						sx={{ ml: 'auto', display: { sm: 'none' }, color: '#333' }}
 					>
 						<MenuIcon />
 					</IconButton>

					{/* navigation */}
					<Box display={{ xs: 'none', sm: 'flex' }}>
						{/* if active button is collection, then mark that button in a different style that is 'active' */}
						{
							activeLink === 'collections' ?
							<NavButtonActive onClick={() => handleClick('collections')} disableRipple={true}><p>Collections</p></NavButtonActive> :
							<NavButton link={'collections'} text={'Collections'} setActiveLink={setActiveLink} colour={'dark'} arrow={false} customStyle={{ margin: '0px 10px' }}/>
						}

						{
							activeLink === 'about' ?
							<NavButtonActive onClick={() => handleClick('about')} disableRipple={true}><p>About</p></NavButtonActive> :
							<NavButton link={'about'} text={'About'} setActiveLink={setActiveLink} colour={'dark'} arrow={false} customStyle={{ margin: '0px 10px' }}/>
						}

						{/* {
							activeLink === 'blog' ?
							<NavButtonActive onClick={() => handleClick('blog')} disableRipple={true}><p>Blog</p></NavButtonActive> :
							<NavButton link={'blog'} text={'Blog'} setActiveLink={setActiveLink} colour={'dark'} arrow={false} customStyle={{ margin: '0px 10px' }}/>
						} */}

						{
							activeLink === 'contact' ?
							<NavButtonActive onClick={() => handleClick('contact')} disableRipple={true}><p>Contact</p></NavButtonActive> :
							<NavButton link={'contact'} text={'Contact'} setActiveLink={setActiveLink} colour={'dark'} arrow={false} customStyle={{ margin: '0px 10px' }}/>
						}
					</Box>

				</Toolbar>
			</AppBar>

			<nav>
				<Drawer
					container={container}
					variant={'temporary'}
					open={mobileOpen}
					onClose={handleDrawerToggle}
					anchor={'right'}
					ModalProps={{ keepMounted: true }}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
					}}
				>
					{drawer}
				</Drawer>
			</nav>

		</Box>
	)
}
