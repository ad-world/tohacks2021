import React, {useEffect, useState} from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'
import NewsCard from './NewsCard'

const stop = 1;

export default function HomeMain() {
    var currentTab = useState(localStorage.getItem('current-tab'));
    const [data, setData] = useState([], 0)
    useEffect(() => 
        fetch("http://localhost:8080/api/getCategory", 
            {   method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({"kw": currentTab, "loc":"CA"})
            }).then((response) => {return response.json()}).then((r) => {
                setData(r, [stop]); console.log("new request was made")}), localStorage.getItem('current-tab'))
    return (
        <Container className="background">
            <Grid columns={3}>
                <Grid.Row>
                    {
                        data && data.map(article => {
                            return (
                                <GridColumn key={article.id} style={{ marginBottom: 20 }}>
                                    <NewsCard article={article} />
                                </GridColumn>
                            )
                        })
                    }
                </Grid.Row>
            </Grid>
        </Container>
    )
    /*const data = require('../news_sample.json');
    console.log(data)

    return (
        <Container className="background">
            <Grid columns={3}>
                <Grid.Row>
                    {
                        data && data.map(article => {
                            return (
                                <GridColumn key={article.id} style={{ marginBottom: 20 }}>
                                    <NewsCard article={article} />
                                </GridColumn>
                            )
                        })
                    }
                </Grid.Row>
            </Grid>
        </Container>
    )*/
}
