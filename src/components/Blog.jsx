import * as React from 'react';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';

import FeaturedPost from './FeaturedPost';
import listOfPosts from './posts/ListOfPosts';

// import Grid from '@mui/material/Grid';
// import Categories from './Categories';

function Blog ({ name, setActiveLink }) {

  return (
    <Box
      display='flex'
			flexDirection='column'
			justifyContent='center'
			gap={3}
			sx={{
				margin: {
					// top | left and right | bottom
					// appbar 56px
					xs: '0px 30px 0px',
					sm: '0px 150px 26px',
					md: '0px 150px 0px',
					lg: '0px 400px 0px',
					xl: '0px 450px 0px',
				},
        // backgroundColor: {
				// 	xs: 'red',
				// 	sm: 'yellow',
				// 	md: 'grey',
				// 	lg: 'blue',
				// 	xl: 'green'
				// }
      }}
    >

      {
        listOfPosts.map((post) => (
          name === post.category && name !== 'all' ?
            <FeaturedPost
              key={post.title}
              title={post.title}
              date={post.date}
              desc={post.description}
              image={post.image}
              imageLabel={post.imageLabel}
              setActiveLink={setActiveLink}
              link={post.link}
            /> :
            name === 'all' ?
            <FeaturedPost
              key={post.title}
              title={post.title}
              date={post.date}
              desc={post.description}
              image={post.image}
              imageLabel={post.imageLabel}
              setActiveLink={setActiveLink}
              link={post.link}
            /> :
          null
        ))
      }

    </Box>
  )
}

export default Blog;
