// Function to switch between monthly and annual prices
  
  document.getElementById('toggle').addEventListener('change', function() {
    var leftText = document.querySelector('.left-text');
    var rightText = document.querySelector('.right-text');

    if (this.checked) {
        // If toggle is checked, make right text dark and left text light
        rightText.classList.add('dark-color');
        rightText.classList.remove('light-color');
        leftText.classList.add('light-color');
        leftText.classList.remove('dark-color');
    } else {
        // If toggle is not checked, make left text dark and right text light
        leftText.classList.add('dark-color');
        leftText.classList.remove('light-color');
        rightText.classList.add('light-color');
        rightText.classList.remove('dark-color');
    }
});

document.getElementById('toggle').addEventListener('change', function() {
    var limitedPriceElement = document.querySelector('.limited-price');
    var premiumPriceElement = document.querySelector('.premium-price');

    if (this.checked) {
        // Update for Limited Pricing Card
        limitedPriceElement.innerHTML = '<span><strong>$1,650</strong></span>/user';

        // Update for Premium Pricing Card
        premiumPriceElement.innerHTML = '<span><strong>$3,200</strong></span>/user';
    } else {
        // Revert for Limited Pricing Card
        limitedPriceElement.innerHTML = '<span><strong>$200</strong></span>/month/user';

        // Revert for Premium Pricing Card
        premiumPriceElement.innerHTML = '<span><strong>$450</strong></span>/month/user';
    }
});


