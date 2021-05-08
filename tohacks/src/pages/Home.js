import React from 'react'
import HomeSettings from '../components/HomeSettings'
import HomeMain from '../components/HomeMain'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom' 

export default function Home() {
    const settings = JSON.parse(localStorage.getItem("settings"))
    return (
        settings ? <HomeMain /> : <HomeSettings />
    )
}
