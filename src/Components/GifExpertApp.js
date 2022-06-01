import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifComponen } from './GifComponent';
export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Mirai Nikki']);

    /*const handle = () => {
        setCategories([...categories,"High Schoold DxD"]);
    }*/


    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map( category => ( 
                       <GifComponen 
                            key={category}
                            category={category} 
                       />
                    ))
                }
            </ol>
        </>
    )
  }
  