import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom';

import NavButton from '../design/Button';

function Rent ({ setActiveLink }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
			<Box sx={{ padding: '10px', backgroundColor: '', width: '50%' }}>
				<Grid container rowSpacing={2} gap={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

					{/* title of the page */}
					<Grid item xs={12} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'left' }, alignItems: 'center' }}>
						<Typography component="h1" sx={{ fontSize: '28px', marginBottom: '0px', fontWeight: '300', background: 'white' }}>
              Title 1
            </Typography>
					</Grid>

					{/* profile image */}
					<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						{/* <Box component='img' src={image} alt='Daria Schumm' sx={{ width: '200px' }}></Box> */}
					</Grid>

					{/* paragraph about me */}
					<Grid item xs={12}>
						<Typography component="h1" sx={{ fontSize: '16px', marginBottom: '0px', fontWeight: '300', color: '#32292F', background: 'white' }}>
							Title of the post
						</Typography>
						<Typography component="h2" sx={{ fontSize: '16px', marginBottom: '0px', fontWeight: '300', background: 'white' }}>
							Description of the post...
						</Typography>
					</Grid>

					{/* link to collections */}
					<Grid item xs={12}>
						<NavButton link={'collections'} text={'Read More'} setActiveLink={setActiveLink} arrow={true} customStyle={{ fontWeight: '300', textTransform: 'capitalize', fontSize: '16px' }}/>
					</Grid>

				</Grid>
			</Box>
		</Box>
  )
}

export default Rent;
