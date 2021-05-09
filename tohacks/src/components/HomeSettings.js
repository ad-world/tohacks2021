import React, { useState } from 'react'
import { Container, Grid, Form, Checkbox, Header, Button } from 'semantic-ui-react'
import { getLocation } from '../util/getLocation'

function HomeSettings() {
    const [settings, setSettings] = useState({
        sports: false,
        business: false,
        finance: false,
        politics: false,
        technology: false
    })

    const location = {}

    const onSubmit = () => {
        const total = Object.values(settings).reduce((acc, val) => val === true ? acc + 1 : acc, 0);
        getLocation().then(data => {
            return (
                location.country_name = data.country_name,
                location.country_code = data.country_code,
                localStorage.setItem("location", JSON.stringify(location)),
                window.location.reload()
            )
        })

        if (total === 0) {
            alert('Please choose at least one category.')
        } else {
            localStorage.setItem("config", JSON.stringify(settings));
        }
    }


    return (
        <Container fluid style={{ backgroundColor: 'lightblue' }} className="home_container">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
            <div className="child">
                <Grid divided='vertically'>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Header as='h1' style={{ textAlign: 'center' }}>
                                This Is Not A Newspaper
                        </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <div className="inner1">
                                <Header as='h1'
                                    style={{
                                        color: "black",
                                        margin: "0 0 0 50px",
                                        padding: "30px 0",
                                        position: "relative",
                                        left: "150px",
                                    }}>
                                    Welcome! Please select a few categories that you would like to see news for.
                                </Header>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <Form onSubmit={onSubmit}
                                style={{
                                    padding: "0 0 0 30px",
                                    position: "relative",
                                    left: "150px"
                                }}>
                                <Form.Field
                                    control={Checkbox}
                                    label={{ children: 'Sports' }}
                                    name='sports'
                                    value={settings.sports}
                                    onChange={() => {
                                        let current = settings.sports
                                        console.log(current)
                                        setSettings({ ...settings, sports: !current })
                                    }
                                    }
                                />
                                <Form.Field
                                    control={Checkbox}
                                    label={{ children: 'Business' }}
                                    name='business'
                                    value={settings.business}
                                    onChange={() => {
                                        let current = settings.business
                                        console.log(current)
                                        setSettings({ ...settings, business: !current })
                                    }
                                    }
                                />
                                <Form.Field
                                    control={Checkbox}
                                    label={{ children: 'Finance' }}
                                    name='finance'
                                    value={settings.finance}
                                    onChange={() => {
                                        let current = settings.finance
                                        console.log(current)
                                        setSettings({ ...settings, finance: !current })
                                    }
                                    }
                                />
                                <Form.Field
                                    control={Checkbox}
                                    label={{ children: 'Politics' }}
                                    name='politics'
                                    value={settings.politics}
                                    onChange={() => {
                                        let current = settings.politics
                                        console.log(current)
                                        setSettings({ ...settings, politics: !current })
                                    }
                                    }
                                />
                                <Form.Field
                                    control={Checkbox}
                                    label={{ children: 'Technology' }}
                                    name='technology'
                                    value={settings.technology}
                                    onChange={() => {
                                        let current = settings.technology
                                        console.log(current)
                                        setSettings({ ...settings, technology: !current })
                                    }
                                    }
                                />
                                <Button type='submit'>
                                    Submit
                                </Button>
                            </Form>
                            {/* <Button onClick={() => {
                                fetch("http://localhost:8080/api/getCategory", 
                                {   method: 'POST',
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify({"kw":"sports", "loc":"CA"})
                                }).then((response) => {return response.json()}).then((data) => console.log(data))
                            }}>
                                sample text 
                            </Button>
                            <Button onClick={() => {
                                fetch("http://localhost:8080/api/getArticle", 
                                {   method: 'POST',
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify({"url":"https://www.forbes.com/sites/mikeozanian/2021/05/07/worlds-most-valuable-sports-teams-2021/"})
                                }).then((response) => console.log(response.json()))
                            }}>
                                sample text 2
                            </Button> */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </Container>
    )
}


export default HomeSettings;