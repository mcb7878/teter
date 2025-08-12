// دریافت قیمت تتر به دلار از CoinGecko
fetch('https://api.exchangerate-api.com/v4/latest/USD')
  .then(response => response.json())
  .then(data => {
    // نرخ تبدیل دلار به تومان
    let usdToIRR = data.rates.IRR;

    // قیمت تتر به تومان (چون تتر برابر با 1 دلار هست)
    let tetherPriceIRR = usdToIRR;

    // اضافه کردن 6٪ به قیمت تتر
    let adjustedPriceIRR = tetherPriceIRR * 1.06;

    // نمایش قیمت تتر به تومان
    document.getElementById("tether-price").innerHTML = `قیمت لحظه‌ای تتر: ${adjustedPriceIRR.toLocaleString()} تومان`;
  })
  .catch(error => console.error('Error fetching exchange rate data:', error));

// فرم واریز
document.getElementById('deposit-form').addEventListener('submit', function(e) {
  e.preventDefault();

  let amount = document.getElementById('amount').value;

  if (amount < 100) {
    document.getElementById('error-message').style.display = 'block';
  } else {
    document.getElementById('error-message').style.display = 'none';
    // ارسال فرم و اطلاعات به سرور برای تایید واریز
    alert('واریز با موفقیت انجام شد!');
  }
});