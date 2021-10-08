import { useContext } from "react";

import { CartContext } from "../../Providers/cart";
import { CatalogueContext } from "../../Providers/catalogue";

function Button({ type, item }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { cataloque, addToCatalogue, removeFromCatalogue } =
    useContext(CatalogueContext);

  const text = type === "catalogue" ? "Add To Cart" : "Remove From Cart";

  const handleClick = () => {
    if (type === "catalogue") {
      removeFromCatalogue(item);
      addToCart(item);
    } else {
      removeFromCart(item);
      addToCatalogue(item);
    }
  };
  return <button onClick={handleClick}>{text}</button>;
}
export default Button;
