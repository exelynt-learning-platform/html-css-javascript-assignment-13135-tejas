
const quantityElement = document.querySelector("#quantity");
const increaseButton = document.querySelector("#increase-btn");
const decreaseButton = document.querySelector("#decrease-btn");

let quantity = 0;

increaseButton.addEventListener("click", function () {
    quantity += 1;
    updateQuantity();
});

decreaseButton.addEventListener("click", function () {
    if (quantity > 0) {
        quantity -= 1;
        updateQuantity();
    }
});

function updateQuantity() {
    quantityElement.textContent = quantity;
    decreaseButton.disabled = quantity === 0;
}

// Set the initial state
updateQuantity();
