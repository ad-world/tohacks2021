import React from 'react'
import { Card, Label, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

function NewsCard({ article: { id, date, author, title, url } }) {

    return (
        <Card fluid style={{ height: 200 }}>
            <Card.Content>
                <Card.Header>
                    {title}
                    <br></br>
                </Card.Header>
                <Card.Meta></Card.Meta>
        </Card.Content>
        <Card.Content description={author}/>
        <Card.Content extra>
                <Card.Meta as={Link} to={`/articles/${url}`}>
                    <Button size='mini' onClick={() => {
                        localStorage.setItem('link', url)
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