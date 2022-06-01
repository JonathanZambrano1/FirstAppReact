//import React, { useEffect, useState } from 'react'
import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
//import { giftCard } from '../Functions/GetGifts';
import { GiftItems } from './GiftItems';

export const GifComponen = ({ category }) =>  {
          // El ":" es para renombrar
    const {data:images, loading} = useFetchGifts(category);

    return (
      <>
       <h3 className='animate__animated animate__fadeIn'>{category}</h3>
       {loading && <p className='animate__animated animate__flash'>Cargando...</p>}

       <div className='card-p'>
            {
                // El .map recorre todo el array no necesitas hacer for ni colocar [i]
                images.map( img =>(

                    <GiftItems 
                    
                        key = {img.id}
                        {...img}
                    
                    />

                ))
            }
        </div>
      </>

  )
}
