import * as React from 'react';
import { Box } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const history = {
// 	'Dust-1': 'Indian Pacific, Sydney to Adelaide',
// 	'Mountains-1': 'Lake Manapouri, South Island of New Zealand',
// 	'Voyages-2': 'Malaysia 2018',
// }

// const description = {
// 	'Daylight-1': 'Parnell Rose Garden, Auckland, New Zealand (2018)',
// }

// const SubText = styled(Box)({
// 	fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
// 	fontSize: '10px',
//   fontWeight: 400,
// 	color: '#6b6b6b',
// 	marginTop: '-12px',
// 	textAlign: 'center',
// })

// const DesText = styled(Box)({
// 	fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
// 	fontSize: '14px',
//   fontWeight: 400,
// 	color: '#6b6b6b',
// 	marginTop: '-10px',
// 	textAlign: 'center',
// 	// backgroundColor: 'grey',
// })

const Image = ({ item }) => {
	// const fileName = item.match(/[A-Z]{1}[A-Za-z]+-\d{1,2}/g)[0];
	return (
		<>
			{/* <DesText> { description[fileName] } </DesText> */}
			<Box component={'img'} src={item} flex={1} key={item} />
			{/* <SubText> { history[fileName] } </SubText> */}
		</>
	)
}

export default function Gallery ({ name }) {
	const cache = {};

	function importAll(r) {
		r.keys().forEach((key) => (cache[key] = r(key)));
	};

	importAll(require.context('../assets/collections', false, /\.jpg/));
	const images = Object.entries(cache).map(module => module[1]);

	return (
		<Box
			display='flex'
			flexDirection='column'
			justifyContent='center'
			gap={2}
			sx={{
				margin: {
					// top | left and right | bottom
					// appbar 56px
					xs: '0px 30px 0px',
					sm: '0px 150px 0px',
					md: '0px 150px 0px',
					lg: '0px 400px 0px',
					xl: '0px 450px 0px',
				},
			}}
		>
			{
				images.map((item) => (
					item.includes(name) ? <Image item={item} /> : null
				))
			}
		</Box>
	)
}
