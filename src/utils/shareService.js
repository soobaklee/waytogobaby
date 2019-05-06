import getAuthRequestOptions from './adviceService';
import noAuthRequestOptions from './adviceService';
const shareUrl = '/api/community/share/';

const index = () => {
    return fetch(shareUrl, noAuthRequestOptions('GET'))
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Could not retrieve share requests');
    })
}

const show = (itemId) => {
    return fetch(`${shareUrl}${itemId}`, getAuthRequestOptions('GET'))
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Show item request went wrong');
    })
    .then(({item}) => item);
}

const createItem = (item) => {
    var options = getAuthRequestOptions('POST');
    options.body = JSON.stringify(item);
    return fetch(shareUrl, options)
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Item request did not post');
    })
    .then(({ item }) => item);
}


export default {
    index,
    show,
    createItem
}