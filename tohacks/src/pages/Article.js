import { Grid } from '@material-ui/core';
import React from 'react'
import Home from './Home'

import { Link } from 'react-router-dom'

function SingleArticle(){
    
    return (
        <Grid>
             <Link to="/">Back</Link>
        </Grid>
    )
}

export default SingleArticle;