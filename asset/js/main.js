async function getProducts(){
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products;
    
    const result = products.map(function(product){
        return `
        <div class="product">
        <img src = "${product.thumbnail}"/>
        <h2>${product.title}</h2>
        <span class="price">${product.price}$</span>
        <span>${product.brand}</span>
        </div>
        `;

    }).join('');
    document.querySelector(".products").innerHTML = result;

}

getProducts();