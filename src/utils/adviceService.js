const adviceUrl = '/api/community/advice/';
// import tokenService from './tokenService';

const getAllAdvice = () => {
    return fetch(adviceUrl, {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' }),
    })
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('Advice needed is not being retrieved. Try again.');
    })
}

const createAdvice = (advice) => {
    return fetch(adviceUrl, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json' }),
        body: JSON.stringify(advice)
    })
    .then(res => {
        
        if (res.ok) return res.json();
        throw new Error('Advice request did not post');
    })
    // .then(advice => advice);
}

export default {
    getAllAdvice,
    createAdvice
}