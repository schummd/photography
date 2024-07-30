import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Icon = styled(ArrowForwardIcon)(() => ({
  position: 'relative',
  top: '7px',
  backgroundSize: '10px',
}))

const ButtonArrow = styled(Button)(() => ({
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
	fontFamily: 'Montserrat',

	'&:hover': {
		background: 'none',
	},

	'&:hover::after': {
		width: '100%',
	},
}))

const ButtonArrowWhite = styled(ButtonArrow)(() => ({
  'p': {
		margin: 0,
		position: 'relative',
		color: '#fff',
		fontFamily: 'Montserrat'
	},
  '&::after': {
		position: 'absolute',
		content: '""',
		width: 0,
		left: 0,
		bottom: '-7px',
		background: '#fff',
		height: '2px',
		transition: '0.3s ease-out',
	},
  '&:hover p': {
		color: '#fff',
		transition: '0.5s ease-in-out',
	},
}));

const ButtonArrowDark = styled(ButtonArrow)(() => ({
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
  '&:hover p': {
		color: '#6E7DAB',
		transition: '0.5s ease-in-out',
	},
}));

function NavButton({ link, text, setActiveLink, colour, arrow, customStyle }) {
  const navigate = useNavigate();

	const handleClick = () => {
		setActiveLink(link);
		navigate('/' + link);
	}

  return (
    <>
      {
        colour === 'white' && arrow ?
        <ButtonArrowWhite onClick={() => handleClick()} disableRipple={true}>
          <p style={{ fontFamily: 'Montserrat' }}>{text} <Icon viewBox='0 0 18 24'/></p>
        </ButtonArrowWhite> :
				colour === 'white' && !arrow ?
				<ButtonArrowWhite onClick={() => handleClick()} disableRipple={true}>
					<p style={{ fontFamily: 'Montserrat' }}>{text} </p>
				</ButtonArrowWhite> :
				colour === 'dark' && !arrow ?
				<ButtonArrowDark onClick={() => handleClick()} disableRipple={true} sx={customStyle}>
          <p style={{ fontFamily: 'Montserrat' }}>{text} </p>
        </ButtonArrowDark> :
        <ButtonArrowDark onClick={() => handleClick()} disableRipple={true} sx={customStyle}>
          <p style={{ fontFamily: 'Montserrat' }}>{text} <Icon viewBox='0 0 18 24'/></p>
        </ButtonArrowDark>
      }
    </>
  )
}

export default NavButton;
