import * as React from 'react';
import SubHeader from './SubHeader';
import Gallery from './Gallery';

function Collections () {
	const [click, setClick] = React.useState('');

	return (
		<>
			<SubHeader click={click} setClick={setClick}/>
			<Gallery name={click}/>
		</>
	)
}

export default Collections;