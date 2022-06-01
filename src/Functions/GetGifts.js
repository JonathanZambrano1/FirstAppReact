
    export const giftCard = async(category) => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=q0XzwShGHNALuKCvHiw9cThg960VBBn9&q=${encodeURI(category)}&limit=20`;
        const respo = await fetch(url);
        const {data} = await respo.json();

        const gift = data.map( img => {
            return{
                id : img.id,
                title : img.title,
                url : img.images?.downsized.url
            }
        })
        return gift;
    }