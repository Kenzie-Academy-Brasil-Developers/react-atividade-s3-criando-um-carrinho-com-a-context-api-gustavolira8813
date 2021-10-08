import Button from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../../Providers/catalogue";
import { CartContext } from "../../Providers/cart";

import "./styles";
import { Container, List } from "./styles";

function ProductList({ type }) {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <>
      <Container>
        <ul>
          {type === "catalogue" &&
            catalogue.map((item, index) => (
              <List type={type} key={index}>
                <img src={item.img} alt="imagem" />
                <h4>{item.name}</h4>
                <Button type={type} item={item} />
              </List>
            ))}

          {type === "cart" &&
            cart.map((item, index) => (
              <List key={index}>
                <img src={item.img} alt="imagem" />
                <h4>{item.name}</h4>
                <Button type={type} item={item} />
              </List>
            ))}
        </ul>
      </Container>
    </>
  );
}
export default ProductList;
