import React from 'react'


import { Link } from 'react-router-dom'
import { Container, Grid, Header } from 'semantic-ui-react';
import moment from 'moment';
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

function SingleArticle(props) {

    const link = localStorage.getItem('link');
    //var {title, text, authors, date} = {}
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [authors, setAuthors] = useState("")
    const [date, setDate] = useState("")
    const [loading, setLoading] = useState(true);


    useEffect(() =>
        fetch("http://localhost:8080/api/getArticle",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "url": link })
            }).then((response) => { return response.json() }).then((r) => {
                setTitle(r.title);
                setText(r.text);
                setAuthors(r.authors);
                setDate(r.date);
                setLoading(false);
                console.log("new request was made")
            }), [loading])

    var articles

    if (loading) {
        articles =
        <div>
            <Loader active inline='centered' className='settings' size='massive' style={{marginTop: '40%'}}/>
        </div>
            
    } else {
        articles = <Container>
            <NavBar style={{ paddingTop: 40 }} />
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

    }


    return (
        <Container className="background">
            {articles}
        </Container>

    )
}

export default SingleArticle;