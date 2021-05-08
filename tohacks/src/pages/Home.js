import React from 'react'
import HomeSettings from '../components/HomeSettings'
import HomeMain from '../components/HomeMain'

export default function Home() {
    const settings = JSON.parse(localStorage.getItem("config"));
    console.log(settings)
    return (
        settings ? <HomeMain/> : <HomeSettings/>
    )
}
