import React from 'react';
import MainNavbar from '../components/MainNavbar';
import {Grid} from '@material-ui/core';
import MainContainer from '../components/MainContainer';
import SideContainer from '../components/SideContainer';


const Home = (props) => {
    document.title = 'Home - Cleverzone test';
    return (
        <>
            <MainNavbar/>
            <Grid container direction="row" alignItems="flex-start">
                <Grid xs={12} md={9} item>
                    <MainContainer/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SideContainer/>
                </Grid>
            </Grid>
        </>
    );
}
export default Home;