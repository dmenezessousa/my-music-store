import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function ProductDisplay(props) {

  const {product: {
    id,
    title,
    brand,
    price,
    description,
    image,
  }} = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography>${price/100}</Typography>
        }
        title={title}
        subheader={brand}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="text">Add to cart</Button>
        <IconButton aria-label="add to favorites" sx={{marginLeft: 'auto'}}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}