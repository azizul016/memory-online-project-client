import React, { useContext, useEffect, useState } from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import memories from "../../images/memories.png";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./Styles.js";
import { getPosts } from "../../redux/action/postAction";
import { useDispatch } from "react-redux";
import { UserContext } from "../../App";



function Home() {
  const [currentId, setCurrentId] = useState(null);
  
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="initial">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          height="60"
          alt="memories"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={4}
            className={classes.mainContainer}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default Home;
