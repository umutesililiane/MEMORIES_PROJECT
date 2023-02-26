import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, makeStyles, Theme } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/posts/posts';
import Form from './components/form/form';


import useStyles from './styles';
import Navbar from "./components/navbar/navbar";

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (

        <Container maxwidth="lg">
            <Navbar />

            <Grow in>
                <Container >
                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}
export default App;