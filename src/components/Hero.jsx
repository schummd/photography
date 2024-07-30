import * as React from 'react';
import { Typography, Box } from '@mui/material';
import image from "../assets/hero.jpg";
import NavButton from './Button';

export default function Hero ({ setActiveLink }) {
	return (
		<Box
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'center'}
			height={'100vh'}
			width={'100wh'}
			sx={{
				alignItems: 'center',
				backgroundColor: 'grey',
				backgroundImage: `linear-gradient(0deg, rgba(50,41,47,0.8) 0%, rgba(110,125,171,0.8) 100%), url(${image})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'relative',
			}}
		>
			<Box
				width={'80%'}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				margin={'20px'}
			>
				<Typography
					variant={'h1'}
					textAlign={'center'}
					fontSize={'52px'}
					fontWeight={'200'}
					textTransform={'lowercase'}
					color={'#fff'}
					marginBottom={'10px'}
				>
					Locations Unknown
				</Typography>
				<Typography
					variant={'h2'}
					textAlign={'center'}
					fontSize={'24px'}
					fontWeight={'200'}
					textTransform={'lowercase'}
					color={'#fff'}
					marginBottom={'10px'}
				>
					We've gone way too far
				</Typography>
				<NavButton
					link={'collections'}
					text={'Discover'}
					setActiveLink={setActiveLink}
					arrow={true}
					colour={'white'}
				/>
			</Box>
		</Box>
	)
}
