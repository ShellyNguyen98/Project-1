//bsk4nnvrh5rachpnrlt0 finnhub key
$('#search').click(() => {
    event.preventDefault()
    let stock  = $('#stock').val()
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
