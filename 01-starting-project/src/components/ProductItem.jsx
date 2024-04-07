import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

export default function ProductItem({ product }) {
  const cartCtx = useContext(CartContext);

  function handleAddProductToCart() {
    cartCtx.addItem(product);
  }
  return (
    <li className="product-item">
      <article>
        <img
          src={`http://localhost:3000/${product.image}`}
          alt={product.name}
        />
        <div>
          <h3>{product.name}</h3>
          <p className="product-item-price">
            {currencyFormatter.format(product.price)}
          </p>
          <p className="product-item-description">{product.description}</p>
        </div>
        <p className="product-item-actions">
          <Button onClick={handleAddProductToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
