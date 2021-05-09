import React from 'react'


import { Link } from 'react-router-dom'
import { Container, Grid, Header } from 'semantic-ui-react';
import moment from 'moment';
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Loading from '../components/Loading'

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

    const authorCount = authors.length;

    if (loading) {
        articles = <Loading/>
    
            
    } else {
        articles = <Container>
            <NavBar style={{ paddingTop: 40 }} />
            <Grid>
                <Link to="/">Back</Link>
            </Grid>
            <Container text>
                <Header as='h1'>{title}</Header>
                {authorCount < 3 ? (authors.map((author) => {
                    return (
                        <Header as='h2'>
                            {author}
                        </Header>
                    )
                })) : (() => {
                    return (
                        <Header as='h2'>
                            More than two authors
                        </Header>
                    )}
                )}
                <Header as='h3'>{date}</Header>
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