import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '10px 0',
  },
  link: {
    textDecoration: 'none',
  }
});

const Post = (props) => {
  const {title, body, id} = props.post;
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {body}
          </Typography>
        </CardContent>
        <CardActions> 
          <Link className={classes.link} to={`/post/${id}`}>
            <Button variant="contained" color="primary">See More</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;