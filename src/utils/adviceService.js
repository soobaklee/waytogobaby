import tokenService from './tokenService';
const adviceUrl = '/api/community/advice/';


const index = () => {
    return fetch(adviceUrl, getAuthRequestOptions('GET'))
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Could not retrieve advice requests');
    })
}

const show = (adviceId) => {
    return fetch(`${adviceUrl}/${adviceId}`, getAuthRequestOptions('GET'))
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Show advice request went wrong');
    })
    .then(({advice}) => advice);
}

const createAdvice = (advice) => {
    var options = getAuthRequestOptions('POST');
    options.body = JSON.stringify(advice);
    return fetch(adviceUrl, options)
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Advice request did not post');
    })
    .then(({ advice }) => advice);
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

export default {
    index,
    show,
    createAdvice
}