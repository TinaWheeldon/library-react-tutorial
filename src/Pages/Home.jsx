import React from 'react'
import Landing from '../Components/Landing'
import Highlights from './Components/Highlights'
import Discounted from './Components/Discounted'
import Explore from './Components/Explore';
import Featured from './Components/Featured'

const Home = () => {
    return (
        <>
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
        </>
    )
}

export default Home