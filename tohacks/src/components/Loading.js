import React from 'react'
import { Loader } from 'semantic-ui-react'

export default function Loading() {
    return (
        <div>
            <Loader active inline='centered' className='settings' size='massive' style={{marginTop: '40%'}}/>
        </div>
    )
}
