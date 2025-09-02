const products = [
    {
        id: 1,
        title: "Chocolate Cake",
        description: 'Delicious, yummy chocolate cake',
        price: 100,
        img: './Images/pic3.jpg'
    },
    {
        id: 2,
        title: 'Strawberry Cake',
        description: 'Delicious, yummy strawberry cake',
        price: 120,
        img: './Images/pic4.jpg'
    },
    {
        id: 3,
        title: 'Chocolate Cake',
        description: 'Delicious, yummy chocolate cake',
        price: 150,
        img: './Images/pic2.jpg'
    },
    {
        id: 4,
        title: 'Rainbow Cup Cake',
        description: 'Delicious, yummy cupcake',
        price: 50,
        img: './Images/pic6.jpg'
    },
    {
        id: 5,
        title: 'Rassberry Pastrery',
        description: 'Yummy rasberry pastery with chocolate on top',
        price: 80,
        img: './Images/pic7.jpg'
    },
    {
        id: 6,
        title: 'Colorful Macaroons',
        description: 'Delicious, yummy colorful macaroons',
        price: 50,
        img: './Images/pic9.jpg'
    }
]

const submitData = (event) => {
    event.preventDefault();
    alert("Your Message Has Been Send");
    document.querySelector('form').reset();
}

const productContainer = document.getElementById('product-container');
const productData = (products) => {
    return products.map((product) => {
        return `
        <div class="col">
            <div class="card">
                <img src=${product.img} class="card-img-top" />

                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                </div>

                <div class="d-flex justify-content-around mb-4">
                    <h3 class="product_price">${product.price}$</h3>
                    <button class="order-btn" onclick="order()">Order Now</button>
                </div>
            </div>
        </div> `
    }).join('');
}
productContainer.innerHTML = productData(products);

const order = () => {
    alert("Your Order Has Been Placed!");
}