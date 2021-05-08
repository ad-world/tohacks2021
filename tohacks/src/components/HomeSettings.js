import React from 'react'
import { Container, Grid, Form, Checkbox, Header, Button} from 'semantic-ui-react'


export default function HomeSettings() {
    return (
        <Container fluid style={{ backgroundColor: 'lightblue' }} >
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
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
                        <Button onClick={() => {
                            fetch("http://localhost:8080/api/getCategory", 
                            {   method: 'POST',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({"kw":"sports", "loc":"CA"})
                            }).then((response) => console.log(response.json()))
                        }}>
                            sample text 
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}
