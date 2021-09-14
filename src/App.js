import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, Container, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#FFF"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")`,
    height: "500px",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
    color: "#FFF"
  },
  blogsContainer: {
    padding: "1rem 0"
  },
  blogTitle: {
    fontWeight: "bold",
    padding: "1rem 0"
  },
  card: {
    width: "100%"
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between"
  },
  media: {
    width: "100%",
    height: "230px"
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem 0"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6">
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>
      <Container className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articals
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={4} sm={6} xs={12}>
            <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Learn React Hooks
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Typography>
                  John Burger
                </Typography>
                <Typography>
                  10-05-2021
                </Typography>
              </Box>                    
              <Box>
                <BookmarkBorderIcon />
              </Box>                    
            </CardActions>
          </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Javascipt Scope
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Typography>
                  Mickeal.C
                </Typography>
                <Typography>
                  10-05-2021
                </Typography>
              </Box>                    
              <Box>
                <BookmarkBorderIcon />
              </Box>                    
            </CardActions>
          </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Vuejs vs Angular
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Typography>
                  Mike 
                </Typography>
                <Typography>
                  10-05-2021
                </Typography>
              </Box>                    
              <Box>
                <BookmarkBorderIcon />
              </Box>                    
            </CardActions>
          </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Web design tricks
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Typography>
                  Camilia.K
                </Typography>
                <Typography>
                  10-05-2021
                </Typography>
              </Box>                    
              <Box>
                <BookmarkBorderIcon />
              </Box>                    
            </CardActions>
          </Card>
          </Grid>
        </Grid>
        <Box className={classes.pagination}>
          <Pagination count={10} variant="outlined" color="primary" />
        </Box>        
      </Container>
    </div>
  );
}

export default App;
