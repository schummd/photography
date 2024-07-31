import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, TextField, Typography, Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import emailjs from '@emailjs/browser';

const Icon = styled(ArrowForwardIcon)(() => ({
  position: 'relative',
  top: '7px',
  backgroundSize: '10px',
}))

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

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#6E7DAB',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#6E7DAB',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6E7DAB',
    },
  },
});

const validateEmail = (email) => {
  // Regular expression to match email pattern
  const emailRegex = /^[^\s@]+@[^\s@]+$/;
  return emailRegex.test(email);
}

const displayAlert = () => {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      The message was sent successfully.
    </Alert>
  )
}

function Contact () {
  // const navigate = useNavigate();

  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');
  const [messageError, setMessageError] = React.useState(false);
  const [formState, setFormState] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const user = {
      email: data.get('email', '').toString().trim(),
      name: data.get('name', '').toString(),
			message: data.get('message', '').toString(),
    };

    let error = false;

    // Perform client-side validation
    if (!validateEmail(user.email)) {
      error = true;
      setEmailError('Invalid Email');
    }
    if (user.name.length === 0) {
      error = true;
      setNameError(true);
    }
    if (user.message.length === 0) {
      error = true;
      setMessageError(true);
    }
    if (error) return;

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setFormState(true))
      .catch(() => setFormState(false));

    // resent the whole form
    event.currentTarget.reset();
  };

  // listens to a click anywhere on the page and removes the success alert
  // TODO: change to respond only to a click within the form !
  React.useEffect(() => {
    const handleClick = () => {
      setFormState(false);
    }
    document.addEventListener('mousedown', handleClick);
  }, []);

  // const handleClick = () => {}

	return (
		<Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100vh'}
    >
      <Box
        width={{ xs: '80%', sm: '50%'}}
        textAlign={'center'}
      >

        <Box backgroundColor={''}>
          <Typography
            component={'h1'}
            fontSize={'28px'}
            fontWeight={'300'}
            marginBottom={'0px'}
          >
            Questions? Suggestions?
          </Typography>
          <Typography
            component={'h2'}
            fontSize={'28px'}
            fontWeight={'300'}
            marginBottom={'20px'}
          >
            Send a message
          </Typography>
        </Box>

        <Box
          component={'form'}
          name={'contact-form'}
          noValidate
          onSubmit={handleSubmit}
        >

          <Grid container spacing={2} backgroundColor={''}>
            <Grid item xs={12}>
              <CustomTextField
                aria-label={'name input field'}
                required
                fullWidth
                size={'small'}
                id={'name'}
                name={'name'}
                type={'text'}
                label={'Name'}
                autoComplete={'given-name'}
                error={nameError}
                helperText={nameError ? 'Name can\'t be empty' : null}
                onChange={() => setNameError(false)}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                aria-label='email input field'
                required
                fullWidth
                size='small'
                id="email"
                name="email"
                label="Email Address"
                autoComplete="email"
                error={emailError !== ''}
                helperText={emailError}
                onChange={() => setEmailError('')}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                aria-label='message input field'
                required
                fullWidth
                id="message"
                name="message"
                label="Message"
                type="message"
                autoComplete="new-message"
                error={messageError}
                helperText={messageError ? 'Message field can\'t be empty' : null}
                onChange={() => setMessageError(false)}
                multiline={true}
                inputProps={{ style: { height: '100px' } }}
                sx={{ marginBottom: '10px' }}
              />
            </Grid>
          </Grid>

          <Box
            display={'flex'}
            justifyContent={'right'}
            width={'100%'}
          >
            <NavButton
              type={'submit'}
              disableRipple={true}
              // onClick={() => handleSubmit()}
              // sx={{ backgroundColor: '' }}
            >
              <p fontFamily={'Montserrat'}>Submit <Icon viewBox='0 0 18 24'/></p>
            </NavButton>
          </Box>

          <Box sx={{ marginTop: '30px' }}>
            { formState ? displayAlert() : null }
          </Box>

        </Box>
      </Box>
    </Box>
	)
}

export default Contact;