import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';

import image from "../assets/profile_picture.png";
import NavButton from './Button';

function About ({ setActiveLink }) {
	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			alignItems={'center'}
			justifyContent={'center'}
			height={'100vh'}
    >
			<Box
				padding={'20px'}
				width={{ xs: '80%', sm: '50%' }}
			>
				<Grid container rowSpacing={2}>

					{/* title of the page */}
					<Grid item xs={12} sm={6} display={'flex'} justifyContent={{ xs: 'center', sm: 'left' }} alignItems={'center'}>
						<Typography
							component={'h1'}
							variant={'h1'}
							fontSize={'30px'}
							fontWeight={'300'}
							paddingBottom={{ xs: '10px', sm: '0px' }}
						>
							About Me
						</Typography>
					</Grid>

					{/* profile image */}
					<Grid item xs={12} sm={6} display={'flex'} justifyContent={'center'}>
						<Box component='img' src={image} alt={'Daria Schumm'} width={'200px'} paddingBottom={{ xs: '10px', sm: '0px' }} />
					</Grid>

					{/* paragraph about me */}
					<Grid item xs={12}>
						<Typography
							component={'p'}
							fontSize={'16px'}
							fontWeight={'300'}
							color={'#32292F'}
							marginBottom={'10px'}
						>
							My name is Daria Schumm.
						</Typography>
						<Typography
							component={'p'}
							fontSize={'16px'}
							fontWeight={'300'}
							color={'#32292F'}
							marginBottom={'10px'}
						>
							Since 2023 I been living in Zürch, Switzerland.
						</Typography>
						<Typography
							component={'p'}
							fontSize={'16px'}
							fontWeight={'300'}
							color={'#32292F'}
						>
							Photography has been my hobby ever since I remember.
							Today, the collections cover my best works spanning across years of experience.
							Each collection is a mixture of different locations and formed by the common mood.
						</Typography>
					</Grid>

					{/* link to collections */}
					<Grid item xs={12}>
						<NavButton
							link={'collections'}
							text={'Discover Collections'}
							setActiveLink={setActiveLink}
							arrow={true}
							customStyle={{ fontWeight: '300', textTransform: 'capitalize', fontSize: '16px' }}
						/>
					</Grid>

				</Grid>
			</Box>
		</Box>
	)
}

export default About;