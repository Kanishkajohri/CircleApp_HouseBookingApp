let selectedProperty = "";
let selectedRent = 0;

function selectProperty(name, rent) {
    selectedProperty = name;
    selectedRent = rent;
    document.getElementById('selected-property').textContent = `Selected Property: ${name}`;
    updateRentDetails();
}

document.getElementById('tenure').addEventListener('change', updateRentDetails);

function updateRentDetails() {
    const tenure = document.getElementById('tenure').value;
    const monthlyRent = selectedRent;
    const totalAmount = monthlyRent * tenure;
    document.getElementById('monthly-rent').textContent = `Monthly Rent: ₹${monthlyRent}`;
    document.getElementById('total-amount').textContent = `Total Amount: ₹${totalAmount}`;
}

document.getElementById('pay-circle').addEventListener('click', function() {
    if (selectedProperty) {
        alert(`Payment initiated for ${selectedProperty} with rent ₹${selectedRent}/month`);
    } else {
        alert('Please select a property first!');
    }
});
function selectProperty(name, rent) {
    selectedProperty = name;
    selectedRent = rent;
    document.getElementById('selected-property').textContent = `Selected Property: ${name}`;
    updateRentDetails();
}
function getStarted() {
    const termsCheckbox = document.getElementById('terms');
    if (termsCheckbox.checked) {
        alert('Proceeding to the next step.');
    } else {
        alert('Please agree to the terms and conditions.');
    }
}





  

