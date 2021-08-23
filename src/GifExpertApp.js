import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    //const categories = ['One Pounch' , 'Samurai X', 'Dragon Ball'];

    const [categories, setcategories] = useState(['One Punch'])

    /* const handleAdd = () => {

        //setcategories( [...categories, 'HunterXHunter'] );
        setcategories( cats => [ ...categories, 'HunterXHunter']);
    } */



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setcategories} />
            <hr />
            <ol>
                {
                    categories.map(category => (

                        <GifGrid
                            key={category}
                            category={category} />


                    ))}
            </ol>
        </>
    )
}
