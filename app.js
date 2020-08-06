$('#search').click(() => {
    event.preventDefault()
    $(`.hide`).removeClass('hide')
    let stock = $('#stock').val().toUpperCase()
    let restaurant = $('#city').val()
    console.log(stock)
    console.log(restaurant)

    axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${stock}&token=bsk4nnvrh5rachpnrlt0`)
        .then(res => {
            console.log(res)
            $('#stockImg').attr('src', res.data.logo)
            $('#stockName').html(`
                <a href="${res.data.weburl}" target="_blank">${res.data.name}</a>
            `)
        })
        .catch(err => {
            console.log(err)
        })

    axios.get(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=bsk4nnvrh5rachpnrlt0`)
        .then(res => {
            let change = (((res.data.c - res.data.o) / res.data.o) * 100).toFixed(2)
            let changeInt = parseFloat(change)
            $('#stockStats').html(`
            <p>Current Stock Price: ${res.data.c}</p>
            <p>Opening Stock Price: ${res.data.o}</p>
            <p>% Change: <span id="stockChange">${change}%</span></p>
        `)


        let calculatedPrice = 0
        if (changeInt <= 0) {
            calculatedPrice = 1
            $(`#stockChange`).addClass('red')
        } else if (changeInt <= 1) {
            calculatedPrice = 2
            $(`#stockChange`).addClass('green')
        } else if (changeInt <= 2) {
            calculatedPrice = 3
            $(`#stockChange`).addClass('green')
        } else {
            calculatedPrice = 4
            $(`#stockChange`).addClass('green')
        }

        searchOnPrice (calculatedPrice)
        })

        .catch(err => {
            console.log(err)
        })
})


function searchOnPrice (price) {
    let restaurant = $('#city').val()
    console.log(restaurant)
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${restaurant}&price=${price}&limit=5`, {
    headers: {
    'Authorization': `Bearer lbogapYHxff9h2fSNoWEoM420b8mRfQ4JBsiphR6BtaNKlmR51XQt3wCm2ocKhlkvpnv_46BvAcMuB_cTrv7pmRtuMMplxzaBAA_nAU57ttpRZlv9y05lvxWcXUoX3Yx`
    }
    })
        .then(res => {
            console.log(res)
            for (let i = 0; i < res.data.businesses.length; i++) {
                //console.log(res.data.businesses[i].image_url)
                $(`#img${i}`).attr('src', res.data.businesses[i].image_url)
                $(`#name${i}`).html(`
                    <a class="resName" href="${res.data.businesses[i].url}" target="_blank">${res.data.businesses[i].name}</a>
                `)
                $(`#content${i}`).html(`
                    <p><span class="info">Type:</span> ${res.data.businesses[i].categories[0].title}</p>
                    <p><span class="info">Rating:</span> ${res.data.businesses[i].rating}</p>
                    <p><span class="info">Review Count: </span>${res.data.businesses[i].review_count}</p>
                    <p><span class="info">Price:</span> <span class="green">${res.data.businesses[i].price}</span></p>
                `)
                if (price < 0) {
                    $('.resName').addClass('poor')
                } else if (price <= 2) {
                    $('.resName').addClass('regular')
                } else {
                    $('.resName').addClass('rich')
                }

            }
        })
        .catch(err => {
            console.error(err)
        })
    $('#foodSearch').empty()
}
