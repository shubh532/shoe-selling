import classes from "./CartItems2.module.css";
import Modal2 from "./Modal2";
import { useContext } from "react";
import CartContext from "../ContextAapi/CartContex";
import CartItems from "./CartItems";

function CartItem2(props) {
  const cartItems = useContext(CartContext)

  const genterateBill=()=>{
    cartItems.generateBill()
  }

  const TotalAmount=cartItems.Items.reduce((Total,item)=>{
    return Total+item.Price*item.Qty
  },0)

  const MealItems = cartItems.Items.map((item) => (
    <CartItems
      key={item.id}
      item={item.id}
      name={item.Name}
      price={item.Price}
      Qty={item.Qty}
      Size={item.Size}
    ></CartItems>
  ));
  
  return (
    <Modal2 onClick={props.onClick}>
      <div className={classes.CartContainer}>
        <h3 className={classes.heading}>Cart Items</h3>
        <ol className={classes.list}>{MealItems}</ol>
        <div className={classes.TotalAmount}>
          <span className={classes.span1}>Total Amount </span>
          <span className={classes.span2}>{TotalAmount}RS</span>
        </div>
        <div className={classes.buttons}>
          <button className={classes.button1} onClick={props.UnCartBtnHandle}>
            Close
          </button>
          <button className={classes.button2} onClick={genterateBill}>GenerateBill</button>
        </div>
      </div>
    </Modal2>
  );
}

export default CartItem2;
