
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });

  document.getElementById("cart-count").innerText = cart.length;

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

function toggleCart() {
  let cartBox = document.getElementById("cart-items");

  if (cartBox.style.display === "none") {
    cartBox.style.display = "block";
    displayCart();
  } else {
    cartBox.style.display = "none";
  }
}

function displayCart() {
  let cartList = document.getElementById("cart-list");
  let total = 0;

  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;

    let li = document.createElement("li");
    li.innerHTML = `${item.name} - ₹${item.price} 
    <button onclick="removeItem(${index})">❌</button>`;
    cartList.appendChild(li);
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
  cart.splice(index, 1);

  document.getElementById("cart-count").innerText = cart.length;

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

window.onload = function () {
  let savedCart = localStorage.getItem("cart");

  if (savedCart) {
    cart = JSON.parse(savedCart);
    document.getElementById("cart-count").innerText = cart.length;
  }
};