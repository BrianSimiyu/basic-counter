import categories from "./data.js";

const categoriesContainer = document.getElementById("categories");

// loop through each category and create a div for it
categories.forEach((category) => {
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");
  categoryDiv.innerHTML = `<h2>${category.name}</h2>`;

  // loop through each product in the category and create a counter for it
  category.products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    
      <span>${product.name}</span>
      <div class="counter">
      <button class="minus">-</button>
      <input type="number" class="count-input" min="0" value="${product.quantity}">
      <button class="plus">+</button>
    </div>
      
    `;

    const quantityInput = productDiv.querySelector("input");
    const minusButton = productDiv.querySelector(".minus");
    const plusButton = productDiv.querySelector(".plus");

    // update the product quantity when the input changes
    quantityInput.addEventListener("change", () => {
      product.quantity = parseInt(quantityInput.value);
    });

    // decrement the product quantity when the minus button is clicked
    minusButton.addEventListener("click", () => {
      if (product.quantity > 0) {
        product.quantity--;
        quantityInput.value = product.quantity;
      }
    });

    // increment the product quantity when the plus button is clicked
    plusButton.addEventListener("click", () => {
      product.quantity++;
      quantityInput.value = product.quantity;
    });

    // only show the product counter when the quantity is greater than 0
    if (product.quantity === 0) {
      quantityInput.classList.add("hidden");
      minusButton.classList.add("hidden");
    }

    categoryDiv.appendChild(productDiv);
  });

  categoriesContainer.appendChild(categoryDiv);
});
