document.getElementById('amount').addEventListener('input', function () {
  const currency = document.getElementById('currency').value;
  const network = document.getElementById('network').value;
  const id = network ==='usdt' ? 'tether' : network
  const amount = parseFloat(document.getElementById('amount').value);
  const result = document.getElementById('result');

  if (!currency || !network) {
    result.value = 'Select both currencies';
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    result.value = 'Enter valid amount';
    return;
  }


  fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${id}`, {
    method: 'GET'
  })
    .then(response =>{
      if (response.status === 200) {
        return response.json();
      } else {
        result.value = 'API Error';
      }
    })
    .then(data => {
      if (!data || !data[0]) {
        result.value = 'No data returned';
        return;
      }

      const currentPrice = data[0].current_price;

      let converted = amount / currentPrice;

      // if (from === 'bitcoin' && to === 'ngn') {
      //   converted = amount * btcToNgn;
      // } else if (from === 'ngn' && to === 'bitcoin') {
      //   converted = amount / btcToNgn;
      // } else {
      //   result.value = 'Unsupported pair';
      //   return;
      // }

      result.value = converted.toFixed(6);
    })
    .catch(function (error) {
      console.log(error);
      result.value = 'Data fetching error, please try again';
    });
});
