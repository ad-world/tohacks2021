import React from 'react'
import Home from './Home'

import { Link, useParams } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react';
import moment from 'moment';

function SingleArticle(props) {

    const link = localStorage.getItem('link');

    /*

    Create Query Here    
    {return title, text, date}
    */

    
    return (
        <Container>
            <Grid>
                <Link to="/">Back</Link>
            </Grid>
            <Container text>
                <Header as='h1'>{title}</Header>
                <Header as='h3'>{moment(date).fromNow()}</Header>
                <p>
                    {text}
                </p>
            </Container>
        </Container>
    )
}

export default SingleArticle;