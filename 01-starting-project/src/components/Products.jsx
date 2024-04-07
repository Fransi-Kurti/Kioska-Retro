// import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";


const config = {};

export default function Products() {
  const {
    data: loadedProducts,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/products", config, []);

  if (isLoading) {
    return <p style={{ textAlign: 'center' }}>Fetching Products...</p>;
  }

  if(error) {
    return <Error title='Failed to fetch Products...' message={error} />
  }

  //  const [loadedProducts, setLoadedProducts] = useState([])
  // useEffect(() => {
  //  async function fetchProducts() {
  //     const response = await fetch("http://localhost:3000/products");
  //     const products = await response.json()
  //     setLoadedProducts(products)
  //     console.log(products);
  //   }
  //   fetchProducts();
  // }, []);

  return (
    <ul id="products">
      {loadedProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
