interface Product {
  price: number;
  name: string;
  qunatity: number;
}

const printProduct = (product: Product): void => {
  console.log(`${product.name}-$${product.price}`);
};

console.log("hello");
