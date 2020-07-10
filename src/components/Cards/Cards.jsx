import React from 'react'
import {CardContent, Typography, Grid, CardActionArea, CardMedia } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

// import { infectedlogo } from '../../images/infectedlogo.png'
// { <img src={infectedlogo} alt=""/> }

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'loading...!!'
    }


    return (
        <div className={cx(styles.container, styles.card)}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}  >
                 
                        <CardActionArea className={cx(styles.card1, styles.infected)}>
                            <CardMedia
                                component="img"
                                alt="Infected"
                                height="140"
                                width='0'
                                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4l8qNw7XaJ9UW1qiHb0N9zitjee3of-Rmvw&usqp=CAU'
                                title="Infected"
                            />
                            <CardContent className={cx(styles.card1, styles.infected)}>
                                <Typography gutterBottom variant="h4" >
                                    Infected
                                </Typography>
                                <Typography variant='h5'><CountUp start={0} end={confirmed.value} duration={2.5} separator="," /></Typography>

                                <Typography colr='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>                 <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                            </CardContent>
                        </CardActionArea>

                   




                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                   
                        <CardActionArea className={cx(styles.card2, styles.recovered)}>
                            <CardMedia
                                component="img"
                                alt="Infected"
                                height="140"
                                width='0'
                                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyezwGuJmUQ4ttC262To5A6TXmIrLr4Hw9Ug&usqp=CAU'
                                title="Infected"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" >
                                    Recovered
                                </Typography>
                                <Typography variant='h5'><CountUp start={0} end={recovered.value} separator=',' /></Typography>
                                <Typography colr='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                                <Typography variant='body2'>Number of recovered from COVID-19</Typography>
                            </CardContent>
                        </CardActionArea>

                    
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    {/* <Card> */}
                        <CardActionArea className={cx(styles.card3,styles.deaths)}  >
                            <CardMedia
                                component="img"
                                alt="Infected"
                                height="140"
                                width='0'
                                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbtlOv_DOlqMMECG3GixJe4ChBHURa0jdHkQ&usqp=CAU'
                                title="Infected"
                            />
                            <CardContent >
                                <Typography gutterBottom variant="h4" >
                                    Deaths
                                </Typography>                 
                                <Typography variant='h5'><CountUp start={0} end={deaths.value} separator=',' /></Typography>
                                <Typography colr='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                                <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
                            </CardContent>
                        </CardActionArea>

                    {/* </Card> */}
                </Grid>

            </Grid>
        </div>


































        // <div className={cx(styles.container , styles.card)}>
        //     <Grid container spacing={3} justify='center' >
        //         <Grid item component={Card} xs={12} md={3}  className={cx(styles.card1,styles.infected)}>
        //             <CardContent>
        //                 <Typography colr='secondary' variant='h4' gutterBottom>Infected  </Typography>
        //                 <Typography variant='h5'><CountUp start={0} end={confirmed.value} duration={2.5} separator=","/></Typography>                  

        //                 <Typography colr='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>
        //                 <Typography variant='body2'>Number of active cases of COVID-19</Typography>
        //             </CardContent>


        //         </Grid>

        //         <Grid item component={Card} xs={12} md={3}  className={cx(styles.card2,styles.recovered)}>
        //             <CardContent>
        //                 <Typography colr='#263238' variant='h4' gutterBottom>Recovered</Typography>
        //                 <Typography variant='h5'><CountUp start={0} end={recovered.value} separator = ',' /></Typography>
        //                 <Typography colr='textSecondary'>{ new Date (lastUpdate).toDateString()}</Typography>
        //                 <Typography variant='body2'>Number of recovered from COVID-19</Typography>
        //             </CardContent>


        //         </Grid>


        //         <Grid item component={Card} xs={12} md={3}  className={cx(styles.card3,styles.deaths)}>
        //             <CardContent>
        //                 <Typography variant='h4'>Deaths</Typography>
        //                 <Typography variant='h5'><CountUp start={0} end={deaths.value} separator=','/></Typography>
        //                 <Typography colr='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
        //                 <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
        //             </CardContent>


        //         </Grid>



        //     </Grid>

        // </div>
    )
}
export default Cards