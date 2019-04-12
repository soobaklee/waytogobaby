const walmartUrl = '/api/walmart/';


export const  getAllBabyProdCat = () => {
    return fetch(walmartUrl + 'products', {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' }),
    })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error('Products are not being retrieved. Try again!');
        })
}