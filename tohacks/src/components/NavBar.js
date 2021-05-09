import React, { useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'


export default function NavBar() {
    const [current, setCurrent] = useState('latest news');
    const config = JSON.parse(localStorage.getItem("config"));
    const handleClick = (e, { name }) => {
        localStorage.setItem('current-tab', name);
    };

    return (
        <Menu secondary>
            <Menu.Item
                name='Latest News'
                active={current === 'latest news'}
                onClick={handleClick}
            />
            {config && Object.entries(config).map((key, val) => {
                if (key[1]) {
                    console.log(key)
                    return (
                        <Menu.Item
                            name={key[0]}
                            active={current === {key}}
                            onClick={handleClick}
                        />
                    )
                }
            })}
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item
                    name='logout'
                    active={current === 'logout'}
                    onClick={handleClick}
                />
            </Menu.Menu>
        </Menu>
    )
}




