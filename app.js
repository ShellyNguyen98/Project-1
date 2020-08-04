//bsk4nnvrh5rachpnrlt0 finnhub key
// gSvqKHVo4SqT2L7QNABBlQQNcVJp8c16F0RBXZHqryC6qvjTgTbDHpTnN1ltdJDPeunYBd_rxAersy_heJPvUmjxnhJhbay0xdwJp0hMtCfwxyt-JntJ-62AjHgoX3Yx Yelp Api key

$('#search').click(() => {
    event.preventDefault()
    let stock  = $('#stock').val().toUpperCase()
    let restaurant = $('#food').val()
    console.log(stock)
    axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${stock}&token=bsk4nnvrh5rachpnrlt0`)
    .then(res => {
        console.log(res)
        $('#stockSearch').html(`
            <a href="${res.data.weburl}">Stock Name: ${res.data.name}></a>
            <img src="${res.data.logo}" alt="Company Logo">
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
            <p>% Change: ${(((res.data.o - res.data.c)/res.data.o)*100).toFixed(2)}<p>
        `)
    })
    .catch(err => {
        console.log(err)
    })
})

function search3money() {
    
    
axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${restaurant}&price=3&limit=5`, {
      headers: {
        'Authorization': 'Bearer gSvqKHVo4SqT2L7QNABBlQQNcVJp8c16F0RBXZHqryC6qvjTgTbDHpTnN1ltdJDPeunYBd_rxAersy_heJPvUmjxnhJhbay0xdwJp0hMtCfwxyt-JntJ-62AjHgoX3Yx'
      }
    })
      .then(res => {
        console.log(res)
        for (let i = 0; i < res.data.businesses.length; i++) {
            let businessElem = document.createElement('div')
            businessElem.innerHTML = `
            <p>
                <img src = "${res.data.businesses[i]}.image_url)">
                </p>
                `}
        })
      .catch(err => console.error(err)) }

    


