import React from 'react'
import { Card, Icon, Label, Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

function NewsCard({ article: { id, date, title, link } }) {

    return (
        <Card fluid style={{ height: 250 }}>
            <Card.Content>
                <Card.Header>
                    {title}
                </Card.Header>
                <br></br>
                <Card.Meta as={Link} to={`/${id}`} onClick={() => {
                    localStorage.setItem('link', link);
                }}>
                    View Article
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Label>
                    {moment(date).fromNow()}
                </Label>
            </Card.Content>
        </Card>
    );
}

export default NewsCard;