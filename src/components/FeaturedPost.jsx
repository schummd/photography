import * as React from 'react';
// import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// import NavButton from './design/Button';
import { useNavigate } from 'react-router-dom';

function FeaturedPost({ title, date, desc, image, imageLabel, setActiveLink, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
		setActiveLink(link);
		navigate('/' + link);
	}

  return (
    <CardActionArea component="a" onClick={handleClick}>

      <Card variant="outlined" sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {date}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {desc}
          </Typography>
          <Typography variant="subtitle1">
            Read more...
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          sx={{ width: 200, display: { xs: 'none', sm: 'block' } }}
          image={image}
          alt={imageLabel}
        />

      </Card>

    </CardActionArea>
  );
}

// FeaturedPost.propTypes = {
//   post: PropTypes.shape({
//     date: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     imageLabel: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default FeaturedPost;