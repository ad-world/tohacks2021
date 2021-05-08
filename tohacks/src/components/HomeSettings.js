import React from 'react'
import { Container, Grid, Form, Checkbox, Header, Button} from 'semantic-ui-react'


export default function HomeSettings() {
    return (
        <Container fluid style={{ backgroundColor: 'lightblue' }} >
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                            <Header as='h1'>Welcome! Please select a few categories that you would like to see news for.</Header>
                    </Grid.Column>
                    <Grid.Column>
                    <Form>
                            <Form.Field
                                control={Checkbox}
                                label={{ children: 'Sports' }} />
                            <Form.Field
                                control={Checkbox}
                                label={{ children: 'Business' }} />
                            <Form.Field
                                control={Checkbox}
                                label={{ children: 'Finance' }} />
                            <Form.Field
                                control={Checkbox}
                                label={{ children: 'Politics' }} />
                            <Button type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}
