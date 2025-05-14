// Section selectors
let mainPage = document.querySelector(".mainPage");
let blogContent = document.querySelector(".blogContent");
let cardMen = document.querySelector(".cardMen");
let cardgirl = document.querySelector(".cardgirl");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");
let fullPage = document.querySelector(".fullPage");
let addCart = document.querySelector(".addCart");

// Helper to reset all section displays
function hideAllSections() {
    mainPage.style.display = "none";
    cardMen.style.display = "none";
    cardgirl.style.display = "none";
    blogContent.style.display = "none";
    aboutPage.style.display = "none";
    contactus.style.display = "none";
    fullPage.style.display = "none";
    addCart.style.display = "none";
}

// Helper to reset nav colors
function resetNavColors() {
    const ids = ["home", "shop", "blog", "about", "contact"];
    ids.forEach(id => {
        document.getElementById(id).style.color = "black";
    });
}

// Home page
function home() {
    hideAllSections();
    mainPage.style.display = "flex";
    cardMen.style.display = "block";
    cardgirl.style.display = "block";
    blogContent.style.display = "block";
    resetNavColors();
    document.getElementById("home").style.color = "#F72C5B";
}

// Shop page
function shop() {
    hideAllSections();
    cardMen.style.display = "block";
    cardgirl.style.display = "block";
    resetNavColors();
    document.getElementById("shop").style.color = "#F72C5B";
}

// Blog page
function blog() {
    hideAllSections();
    blogContent.style.display = "block";
    resetNavColors();
    document.getElementById("blog").style.color = "#F72C5B";
}

// About page
function about() {
    hideAllSections();
    aboutPage.style.display = "block";
    resetNavColors();
    document.getElementById("about").style.color = "#F72C5B";
}

// Contact page
function contact() {
    hideAllSections();
    contactus.style.display = "block";
    resetNavColors();
    document.getElementById("contact").style.color = "#F72C5B";
}

// Show product details
function showCard(img) {
    hideAllSections();
    let newImg = document.getElementById("cartImg");
    console.log(img)
    newImg.src = img.src;
    fullPage.style.display = "flex";
}

// Call to show cart when icon is clicked
function openCart() {
    hideAllSections();
    document.querySelector(".addCart").style.display = "block";
    displayCart(); 
}

// Show all products in cart
function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cartItemsContainer");
    container.innerHTML = ""; 

    if (cartItems.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cartItem";
        div.style = "border: 1px solid #ccc; margin: 10px 0; padding: 10px;";

        div.innerHTML = `
            <img src="${item.img}" width="100" style="margin-right: 10px;">
            <strong>${item.title}</strong>
            <p>Price: ₹${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        `;
        container.appendChild(div);
    });

    updateCartCount(); 
}

// Remove individual product
function removeItem(index) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    displayCart();
}

// Clear all items
function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}

// Show number of items in cart icon
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartCount").textContent = cartItems.length;
}

// Add product to cart (update existing function)
function addToCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const currentImg = document.getElementById("cartImg").src;

    const item = {
        img: currentImg,
        title: "UrbanEdges Offer : Fashion You Can't Miss",
        price: 899
    };

    cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Added to cart!");

    updateCartCount();
    openCart();
}

// Initialize count on page load
window.onload = () => {
    home();
    updateCartCount();
};
