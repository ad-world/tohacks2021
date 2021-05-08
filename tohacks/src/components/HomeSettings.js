import React, { useState } from 'react'
import { Container, Grid, Form, Checkbox, Header, Button} from 'semantic-ui-react'

function HomeSettings() {
    const [settings, setSettings] = useState({
        sports: false,
        business: false,
        finance: false,
        politics: false
    })

    const onSubmit = () => {
        const total = Object.values(settings).reduce((acc, val) => val === true ? acc + 1: acc, 0)
        if(total === 0){
            alert('Please choose atleast one category.')
        } else {
            localStorage.setItem("config", JSON.stringify(settings));
            window.location.reload()
        }
        
    }


    return (
        <Container fluid style={{ backgroundColor: 'lightblue' }} >
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                            <Header as='h1' 
                                style={{color: "red"}}>Welcome! Please select a few categories that you would like to see news for.</Header>
                    </Grid.Column>
                    <Grid.Column>
                    <Form onSubmit={onSubmit}>
                            <Form.Field
                                control={Checkbox}
                                label={{ children: 'Sports' }}
                                name='sports' 
                                value={settings.sports}
                                onChange={() => {
                                    let current = settings.sports
                                    console.log(current)
                                    setSettings({ ...settings, sports: !current})
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
                                    setSettings({ ...settings, business: !current})
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
                                    setSettings({ ...settings, finance: !current})
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
                                    setSettings({ ...settings, politics: !current})
                                }
                            }
                                />
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


export default HomeSettings;