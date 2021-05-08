import React from 'react'
import { Container, Grid, GridColumn } from 'semantic-ui-react'
import NewsCard from './NewsCard'


export default function HomeMain() {
    const data = require('../news_sample.json');
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
    )
}
