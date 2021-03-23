import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <>
            <h1>Marvel</h1>
            <hr/>
            <HeroList publisher="Marvel Comics"/>
        </>
    )
}
