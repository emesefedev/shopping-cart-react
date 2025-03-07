let products = {}

export function displayProducts() {
  console.log(products)
}

export function addProduct(product) {
  products = {[product.id]: product, ...products}
}

export function updateQuantity(id, newQuantity) {
  products[id].quantity = newQuantity
}

export function deleteProduct(id) {
  delete products[id];
}

