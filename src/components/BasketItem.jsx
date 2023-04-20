function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    <li href="#!" className="collection-item ">
      {name}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(id)}
      >
        remove
      </i>
      x {quantity}{" "}
      <i
        className="material-icons basket-quantity"
        onClick={() => decQuantity(id)}
      >
        add
      </i>{" "}
      = {price * quantity}
      <span
        href="#!"
        class="secondary-content"
        onClick={() => removeFromBasket(id)}
      >
        <i class="material-icons basket-delete">delete_forever</i>
      </span>
    </li>
  );
}
export { BasketItem };
