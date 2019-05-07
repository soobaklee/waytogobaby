import tokenService from './tokenService';
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
    options.body = JSON.stringify({ 'item': item });
    return fetch(shareUrl + 'create', options)
    .then(res => res.json());
}

function getAuthRequestOptions(method) {
    return {
        method,
        headers: new Headers({
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json'
        })
    }
}

function noAuthRequestOptions(method) {
    return {
        method,
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }
}

export default {
    index,
    show,
    createItem
}