//bsk4nnvrh5rachpnrlt0 finnhub key
//gSvqKHVo4SqT2L7QNABBlQQNcVJp8c16F0RBXZHqryC6qvjTgTbDHpTnN1ltdJDPeunYBd_rxAersy_heJPvUmjxnhJhbay0xdwJp0hMtCfwxyt-JntJ-62AjHgoX3Yx yelp key

//Make functions for all $ sign range and to list by rating 


$('#search').click(() => {
    event.preventDefault()
    let stock = $('#stock').val().toUpperCase()
    let restaurant = $('#food').val()
    console.log(stock)
    axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${stock}&token=bsk4nnvrh5rachpnrlt0`)
        .then(res => {
            console.log(res)
            $('#stockSearch').html(`
            <p>
                <img src="${res.data.logo}" alt="Company Logo">
            </p>
            <p>
                <a href="${res.data.weburl}">Stock Name: ${res.data.name}</a>
            </p>
        `)
        })
        .catch(err => {
            console.log(err)
        })
    axios.get(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=bsk4nnvrh5rachpnrlt0`)
        .then(res => {
            console.log(res)
            $('#stockStats').html(`
            <p>Current Stock Price: ${res.data.c}<p>
            <p>Opening Stock Price: ${res.data.o}<p>
            <p>% Change: ${(((res.data.c - res.data.o) / res.data.o) * 100).toFixed(2)}%<p>
        `)
        })
        .catch(err => {
            console.log(err)
        })
})


function search1Price() {
    let restaurant = $('#city').val()
    console.log(restaurant)
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${restaurant}&price=1&limit=5`, {
    headers: {
    'Authorization': 'Bearer lbogapYHxff9h2fSNoWEoM420b8mRfQ4JBsiphR6BtaNKlmR51XQt3wCm2ocKhlkvpnv_46BvAcMuB_cTrv7pmRtuMMplxzaBAA_nAU57ttpRZlv9y05lvxWcXUoX3Yx'
    }
    })
        .then(res => {
            console.log(res)
            for (let i = 0; i < res.data.businesses.length; i++) {
                //console.log(res.data.businesses[i].image_url)
                $('#foodSearch').append(`
                 <img class="picture" src= "${res.data.businesses[i].image_url}">
                <a href="${res.data.businesses[i].url}">Name: ${res.data.businesses[i].name}</a>
                <p>Type: ${res.data.businesses[i].categories[0].title}</p>
                <p>Rating: ${res.data.businesses[i].rating}</p>
                <p>Review Count: ${res.data.businesses[i].review_count}</p>
                `)
            }
        })
        .catch(err => {
            console.error(err)
        })
    $('#foodSearch').empty()
}

function search2Price() {
    let restaurant = $('#city').val()
    console.log(restaurant)
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${restaurant}&price=2&limit=5`, {
    headers: {
    'Authorization': 'Bearer lbogapYHxff9h2fSNoWEoM420b8mRfQ4JBsiphR6BtaNKlmR51XQt3wCm2ocKhlkvpnv_46BvAcMuB_cTrv7pmRtuMMplxzaBAA_nAU57ttpRZlv9y05lvxWcXUoX3Yx'
    }
    })
        .then(res => {
            console.log(res)
            for (let i = 0; i < res.data.businesses.length; i++) {
                //console.log(res.data.businesses[i].image_url)
                $('#foodSearch').append(`
                 <img class="picture" src= "${res.data.businesses[i].image_url}">
                <a href="${res.data.businesses[i].url}">Name: ${res.data.businesses[i].name}</a>
                <p>Type: ${res.data.businesses[i].categories[0].title}</p>
                <p>Rating: ${res.data.businesses[i].rating}</p>
                <p>Review Count: ${res.data.businesses[i].review_count}</p>
                `)
            }
        })
        .catch(err => {
            console.error(err)
        })
    $('#foodSearch').empty()
}

function search3Price() {
    let restaurant = $('#city').val()
    console.log(restaurant)
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${restaurant}&price=3&limit=5`, {
    headers: {
    'Authorization': 'Bearer lbogapYHxff9h2fSNoWEoM420b8mRfQ4JBsiphR6BtaNKlmR51XQt3wCm2ocKhlkvpnv_46BvAcMuB_cTrv7pmRtuMMplxzaBAA_nAU57ttpRZlv9y05lvxWcXUoX3Yx'
    }
    })
        .then(res => {
            console.log(res)
            for (let i = 0; i < res.data.businesses.length; i++) {
                //console.log(res.data.businesses[i].image_url)
                $('#foodSearch').append(`
                 <img class="picture" src= "${res.data.businesses[i].image_url}">
                <a href="${res.data.businesses[i].url}">Name: ${res.data.businesses[i].name}</a>
                <p>Type: ${res.data.businesses[i].categories[0].title}</p>
                <p>Rating: ${res.data.businesses[i].rating}</p>
                <p>Review Count: ${res.data.businesses[i].review_count}</p>
                `)
            }
        })
        .catch(err => {
            console.error(err)
        })
    $('#foodSearch').empty()
}

function search4Price() {
    let restaurant = $('#city').val()
    console.log(restaurant)
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${restaurant}&price=4&limit=5`, {
    headers: {
    'Authorization': 'Bearer lbogapYHxff9h2fSNoWEoM420b8mRfQ4JBsiphR6BtaNKlmR51XQt3wCm2ocKhlkvpnv_46BvAcMuB_cTrv7pmRtuMMplxzaBAA_nAU57ttpRZlv9y05lvxWcXUoX3Yx'
    }
    })
        .then(res => {
            console.log(res)
            for (let i = 0; i < res.data.businesses.length; i++) {
                //console.log(res.data.businesses[i].image_url)
                $('#foodSearch').append(`
                 <img class="picture" src= "${res.data.businesses[i].image_url}">
                <a href="${res.data.businesses[i].url}">Name: ${res.data.businesses[i].name}</a>
                <p>Type: ${res.data.businesses[i].categories[0].title}</p>
                <p>Rating: ${res.data.businesses[i].rating}</p>
                <p>Review Count: ${res.data.businesses[i].review_count}</p>
                `)
            }
        })
        .catch(err => {
            console.error(err)
        })
    $('#foodSearch').empty()
}

// if () {
//     search1Price()
// }
// else if () {
//     search2Price()
// }
// else if () {
//     search3Price()
// }
// else {
//     search4Price
// }


