const giphyApiUrl = '//api.giphy.com/v1/gifs/search';
const giphyApiKey = 'YoyUyRGt2YenjFvxfq87V5gvNjak2EBQ';

const format = (img) => {
    return {
        id: img['id'],
        url:  img.images['original_mp4']
    }
}

export const giphySearch = (term) => {
    const apiUrl = `${giphyApiUrl}?api_key=${giphyApiKey}&q=${term}`; 

    return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
        return response.data.map(i => format(i));
    })
    .catch(err => {
        return err;
    });
}