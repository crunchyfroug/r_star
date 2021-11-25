var api_url = "";
$.getJSON('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1577836800&to=1609376400', function(data) {

    const market_arr = [];
    const price_arr = [];
    const volumes_arr = [];

    for (let i = 0; i<data.prices.length;i++) {
        price_arr.push(data.prices[i][1]);
        
        market_arr.push(data.market_caps[i][1]);
        volumes_arr.push(data.total_volumes[i][1])
    }
    var myTable = "<table><tr>";
    var perrow = 3, 
        table = document.createElement("table"),
        row = table.insertRow();

        cell = row.insertCell();
        cell.innerHTML = "Prices"

        cell = row.insertCell();
        cell.innerHTML = "Market Caps"

        cell = row.insertCell();
        cell.innerHTML = "Total Volumes"
        row = table.insertRow();

    for (var i = 0; i < price_arr.length;) {
        var cell = row.insertCell();
        cell.innerHTML = price_arr[i];

        
        var cell = row.insertCell();
        cell.innerHTML = market_arr[i];

        var cell = row.insertCell();
        cell.innerHTML = volumes_arr[i];
        var next = 3;
        if (next%perrow==0 && next != price_arr.length1)
        { row = table.insertRow(); }
        i++;
    }
    document.getElementById("container").appendChild(table);
    console.log(price_arr.length)
});
