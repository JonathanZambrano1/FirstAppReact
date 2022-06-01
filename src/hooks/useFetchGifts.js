import { useEffect, useState } from 'react';
import { giftCard } from '../Functions/GetGifts';


export const useFetchGifts = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        giftCard(category)
            .then(imgs => {

                    setState({
                        data: imgs,
                        loading: false
                    });

            })

    },[category])

    return state;

}
