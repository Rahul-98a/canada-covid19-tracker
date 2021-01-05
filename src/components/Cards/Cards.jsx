import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'; // using Material-UI for the Cards
import styles from './Cards.module.css';
import CountUp from 'react-countup'; // animiation used for when numbers get updated
import cx from 'classnames' // each card will have mulitple styles

// We first destructure the data prop that was passed, then display the cards if the data has loaded
const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => { 
    {/* If no data, wait for it to be fetched */}
    if(!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {/* Card for Infected Cases */}
                <Grid item component={Card} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active Cases</Typography>
                        
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={0.5} separator=","/>
                        </Typography>                        
                    </CardContent>
                </Grid>


                {/* Card for Recovered Cases */}
                <Grid item component={Card} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={0.5} separator=","/>
                        </Typography>                        
                    </CardContent>
                </Grid>


                {/* Card for Death Cases */}
                <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                       
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={0.5} separator=","/>
                        </Typography>                       
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    );
}

export default Cards;