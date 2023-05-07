import Context from "../ContextAapi/ContexAPI";
import { useContext } from "react";
import CartContext from "../ContextAapi/CartContex";
function ShowProducts() {
  const ContextApi = useContext(Context);
  const CartItemAPI=useContext(CartContext)

  function AddToCart(item,Size){
    const CartItem={...item,Qty:1,Size:Size}
    CartItemAPI.AddItemsToCart(CartItem)
  }

  return (
    <div>
      <h3>Products</h3>
      <ol>{
        ContextApi.Products.map((item) => {
          return (<li key={item.id}>{item.Name}-{item.Discription}-{item.Price} 
          <button onClick={AddToCart.bind(null,item, "L")}>Large {item.L}</button>
          <button onClick={AddToCart.bind(null,item,"M")}>Medium {item.M}</button>
          <button onClick={AddToCart.bind(null,item,"S")}>Small {item.S}</button></li>)
        })
      }</ol>
    </div>
  );
}
export default ShowProducts;