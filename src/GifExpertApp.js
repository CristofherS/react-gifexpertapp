import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Dragon Ball']);

    //const handleAdd = () => {
        //setCategories(cates => [...cates,'HunterXHunter']);
        //setCategories([...categories,'HunterXHunter']);
    //}

    return(
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setcategories={setCategories}/>
            <hr/>

            {
                categories.map( category => (
                    <GifGrid
                        key ={category} 
                        category={category} />
                ))
            }
        </>
    );
}

export default GifExpertApp;