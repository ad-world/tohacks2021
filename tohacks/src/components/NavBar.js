import React, { useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <Menu secondary style={{ marginTop: 9 }}>
            <Menu.Menu >
                <Menu.Item
                    name='Home'
                    as={Link}
                    to="/"
                />
            </Menu.Menu>
        </Menu>
    )
}




