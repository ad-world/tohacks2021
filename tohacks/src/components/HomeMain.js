import React, { useEffect, useState } from 'react'
import { Container, Dropdown, Grid, GridColumn } from 'semantic-ui-react'
import NewsCard from './NewsCard'
import { Input, Menu, Button, Header } from 'semantic-ui-react'
import Loading from './Loading'

const stop = 1;

sessionStorage.clear()
const options = [
    {
        key: 'general',
        text: 'general',
        value: 'general'
    },
    {
        key: 'sports',
        text: 'sports',
        value: 'sports'
    },
    {
        key: 'politics',
        text: 'politics',
        value: 'politics'
    },
    {
        key: 'business',
        text: 'business',
        value: 'business'
    },
    {
        key: 'technology',
        text: 'technology',
        value: 'technology'
    }
]

const totalOptions = ['sports', 'politics', 'business', 'technology']


export default function HomeMain() {
    const [current, setCurrent] = useState('general');
    const [loading, setLoading] = useState(true);
    localStorage.setItem('current-tab', current);
    const config = JSON.parse(localStorage.getItem("config"));
    const handleClick = (e, { name }) => {
        if (sessionStorage.getItem(localStorage.getItem('current-tab')) === null) {
            sessionStorage.setItem(localStorage.getItem('current-tab'), JSON.stringify(current))
        }
        localStorage.setItem('current-tab', name);
        setLoading(true)
        setCurrent(localStorage.getItem('current-tab'))
    };

    const [data, setData] = useState([], 0)

    useEffect(() => {

        const axios = require('axios');

        const custom = totalOptions.includes(current) || current == 'general';

        console.log(custom)
        let params = {}
        if(!custom){
            params = {
                apiKey: '9c47f46421fa498cbe040ea919eb81c1',
                q: current,
                languages: 'en',
                country: 'us'
            }
        } else {
            params = {
                apiKey: '9c47f46421fa498cbe040ea919eb81c1',
                category: current,
                languages: 'en',
                country: 'us'
            }
        }

        axios.get(`https://newsapi.org/v2/top-headlines`, { params })
            .then((res) => {
                console.log(res.data.articles);
                setData(res.data.articles, [1])
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
            })

    },
        [current])

    // 

    // useEffect(() => {
    //     if (sessionStorage.getItem(localStorage.getItem('current-tab')) != null) {
    //         setData(JSON.parse(sessionStorage.getItem(current))); 
    //         setLoading(false);
    //     } else {
    //         fetch("http://localhost:8080/api/getCategory", 
    //             {   method: 'POST',
    //                 headers: {'Content-Type': 'application/json'},
    //                 body: JSON.stringify({"kw": current, "loc":"CA"})
    //             }).then((response) => {return response.json()}).then((r) => {
    //                 setData(r, [stop]); setLoading(false); console.log(r); console.log("new request was made")})}}, [current])

    const [search, setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const [settings, setSettings] = useState({})


    var articles

    if (loading) {
        articles = <Loading />
    } else {
        articles = <Grid columns={3}>
            <Header as='h1'>{current}</Header>
            <Grid.Row>
                {
                    data && data.map(article => {
                        return (
                            <GridColumn key={article.id} style={{ marginBottom: 20 }}>
                                <NewsCard article={article} />
                            </GridColumn>
                        )
                    })
                }
            </Grid.Row>
        </Grid>

    }


    return (
        <Container className="background">
            <Menu secondary>
                <Menu.Item
                    name='general'
                    active='true'
                    onClick={handleClick}
                />
                {config && Object.entries(config).map((key, val) => {
                    if (key[1]) {
                        return (
                            <Menu.Item
                                name={key[0]}
                                active={current === { key }}
                                onClick={handleClick}
                            />
                        )
                    }
                })}
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Dropdown placeholder='Reset configs' fluid multiple selection options={options}
                            onChange={(e, data) => {
                                totalOptions.map(item => {
                                    if (data.value.includes(item)) {
                                        settings[item] = true;
                                    } else {
                                        settings[item] = false;
                                    }

                                })
                            }}
                        />
                        <Button type='submit' onClick={() => {
                            if (Object.keys(settings).length > 0) {
                                localStorage.setItem("config", JSON.stringify(settings));
                                window.location.reload();
                            }
                        }}>Reset</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' onChange={handleChange}>
                            <input />
                            <Button type='submit' onClick={() => {
                                if (search.trim() !== '') {
                                    setCurrent(search)
                                }
                                console.log(search)
                            }}>Search</Button>
                        </Input>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            {articles}
        </Container>
    )
}
