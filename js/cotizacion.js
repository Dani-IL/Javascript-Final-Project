async function cotiza() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
        const data = await response.json();
        console.log(data.bitcoin.usd);
        $(".btcvalor").html(`<div> USD ${data.bitcoin.usd}
</div>`);
    } catch (error) {
        console.error(error);
    }
}

//llamo la API cada 3 segundos
setInterval(cotiza, 3000);