const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })


    //create a new object
    let customObject = {
        data: results.data,
        status: results.status,
        statusText: results.statusText,
        headers: results.headers,
        requestHeader: (results.config ? results.config.headers : null)
    }

    //was just using results.data
    return JSON.stringify(customObject);
}

/*  console.log(results.data);
    console.log(results.status);
    console.log(results.statusText);
    console.log(results.headers);

        const results = await axios({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes',
        params: {
            format: 'json',
            q: `${phrase}`,
        },
    })*/
