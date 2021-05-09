import React from 'react'
import { Card, Icon, Label, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

function NewsCard({ article: { id, date, title, link } }) {

    return (
        <Card fluid style={{ height: 200 }}>
            <Card.Content>
                <Card.Header>
                    {title}
                </Card.Header>
                <Card.Content extra>
                    <Label>
                        {moment(date).fromNow()}
                    </Label>
                    <Icon name='link'>
                        <Link to={`/${id}`} onClick={() => {
                            localStorage.setItem('link', link)
                            console.log(link);
                        }
                        }>
                            Link
                        </Link>
                    </Icon>
                </Card.Content>

            </Card.Content>
        </Card>
    );
}

export default NewsCard;