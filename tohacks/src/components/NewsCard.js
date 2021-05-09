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
        </Card.Content>
        <Card.Content extra>
                <Card.Meta as={Link} to={`/${id}`}>
                    <Button size='mini' onClick={() => {
                        localStorage.setItem('link', link)
                    }}>View Article</Button>
                </Card.Meta>
    
                <Label color='lightblue' style={{float: 'right'}}>
                    {moment(date).fromNow()}
                </Label>


            </Card.Content>
        </Card>
    );
}

export default NewsCard;