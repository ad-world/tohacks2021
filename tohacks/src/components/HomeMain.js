import React from 'react'
import { Container, Grid, Form, Checkbox, Header, Button} from 'semantic-ui-react'
import Box from '@material-ui/core/Box'

export default function HomeMain() {
    return (
        <Container fluid style={{ backgroundColor: 'lightblue'}}>
            <Grid divided='vertically'>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Header as='h1'> Here are the following results: </Header>
                    </Grid.Column>
                    <Grid.Column style={{flexDirection:"row"}}>
                        <Box color="white" bgcolor="orange" p={1} style={{ marginLeft: '0%', marginTop: '60px', width: '30%', height: '50%' }}>
                            Greetings!
                        </Box>
                        <Box color="white" bgcolor="orange" p={1}>
                            Hello!
                        </Box>
                    </Grid.Column>
                    <Grid.Column style={{ marginLeft: '40%', marginTop: '30px', width: '30%' }}>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

