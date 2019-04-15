const babyKey = process.env.BABYPROD_KEY;
const axios = require('axios');

module.exports = {
    index
}

async function index(req, res) {
    try{
        let cat = "5427_486190"
        let response = await axios.get(`https://api.walmartlabs.com/v1/paginated/items?format=json&category=${cat}&apiKey=${babyKey}`)
        // console.log("response", response.data)
        res.json(response.data)
    }
    catch(error){
        console.error("error", error);
    }
}