import React from 'react'
import { Card, Label, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

function NewsCard({ article: { id, date, title, link } }) {

    return (
        <Card fluid style={{ height: 200 }}>
            <Card.Content>
                <Card.Header>
                    {title}
                </Card.Header>
                <Card.Meta as={Link} to={`/${id}`}>
                    <Button onClick={() => {
                        localStorage.setItem('link', link)
                    }}></Button>
                </Card.Meta>
                <Card.Content extra>
                    <Label>
                        {moment(date).fromNow()}
                    </Label>
                </Card.Content>

            </Card.Content>
        </Card>
    );
}

export default NewsCard;