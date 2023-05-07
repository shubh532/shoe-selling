function CartItems(props) {
  return (
    <li>
      <div>
        <h3>{props.name} </h3>
        <div>
          <span> Price:{props.price} </span>
          <span>x{props.Qty}</span>
          <span> Size:{props.Size}</span>
        </div>
      </div>
    </li>
  );
}
export default CartItems;
