import React from 'react'
import Home from './Home'


import { Link } from 'react-router-dom'
import { Container, Grid, Header } from 'semantic-ui-react';
import moment from 'moment';

function SingleArticle(props) {

    const link = localStorage.getItem('link');
    const {title, text, authors, date} = require('../article_sample.json');
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
                <Header as='h2'>{
                    authors
                }</Header>
                <Header as='h3'>{moment(date).fromNow()}</Header>
                <p>
                    {text}
                </p>
            </Container>
        </Container>
    )
}

export default SingleArticle;