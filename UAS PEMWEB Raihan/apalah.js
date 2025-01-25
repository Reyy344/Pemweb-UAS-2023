const orderForm = document.getElementById('orderForm');
const estimatedCost = document.getElementById('estimatedCost');

orderForm.addEventListener('submit', function(event) {
  event.preventDefault();
  calculateCost();
});

function calculateCost() {
  const serviceType = document.getElementById('serviceType').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  let costPerItem = 0;

  if (serviceType === 'cuci_kering') {
    costPerItem = 8000;
  } else if (serviceType === 'cuci_basah') {
    costPerItem = 6000;
  } else if (serviceType === 'setrika') {
    costPerItem = 2000;
  }

  const totalCost = costPerItem * quantity;

  const formattedCost = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalCost);

  estimatedCost.textContent = `Biaya perkiraan: ${formattedCost}`;
}
