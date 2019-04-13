import tokenService from './tokenService';
const adviceUrl = '/api/community/advice/';


// const index = () => {
//     return fetch(adviceUrl, {
//         method: 'GET',
//         headers: {
//             'Authorization': 'Bearer ' + tokenService.getToken()
//         }
//     })
//         // .then(res => res.json());
//         .then(res => {
//             if (res.ok) return res.json();
//             throw new Error('Could not retrieve');
//         })
// }

const createAdvice = (advice) => {
    return fetch(adviceUrl, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }),
        body: JSON.stringify(advice)
    })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error('Advice request did not post');
        })
    // .then(advice => advice);
}

export default {
    // index,
    createAdvice
}