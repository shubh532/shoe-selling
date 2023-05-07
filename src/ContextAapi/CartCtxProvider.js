import { useState } from "react";
import CartContext from "./CartContex";

function CartCtxProvider(props) {
    const [CartItem, UpdatecartItems] = useState([])

    const AddItemsToCart = async (product) => {

        const ExistItem = CartItem.findIndex((items) => items.id === product.id);


        if (CartItem[ExistItem]) {
            CartItem[ExistItem].Qty = CartItem[ExistItem].Qty + product.Qty;
            CartItem[ExistItem].Size = `${CartItem[ExistItem].Size} +${product.Qty}x${product.Size}`;
            const { id, Discription, Name, Price, Size, Qty, L, M, S } = CartItem[ExistItem]
            const item = {
                id: id,
                Discription: Discription,
                Name: Name,
                Price: Price,
                Size: Size,
                Qty: Qty,
                L: L,
                M: M,
                S: S
            }
            const ID = CartItem[ExistItem]._id
            delete item._id
            const response = await fetch(`https://crudcrud.com/api/1489f18060e7468f9f989998e318dff2/CartItems/${ID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...item })
            })
            if (response.ok){
                alert("Add To Cart")
            }

        } else {
            const { id, Discription, Name, Price, Size, Qty, L, M, S } = product

            const item = {
                id: id,
                Discription: Discription,
                Name: Name,
                Price: Price,
                Size: Size,
                Qty: Qty,
                L: L,
                M: M,
                S: S
            }

            const Response = await fetch("https://crudcrud.com/api/1489f18060e7468f9f989998e318dff2/CartItems", {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (Response.ok) {
                const Data = await Response.json()
                UpdatecartItems([...CartItem, Data])
                alert("Added To cart")
            }

        }

    }

    const generateBill = () => {
        UpdatecartItems([])
    }

    const Defaultvalues = {
        Items: CartItem,
        AddItemsToCart: AddItemsToCart,
        generateBill: generateBill
    }
    return <CartContext.Provider value={Defaultvalues}>
        {props.children}
    </CartContext.Provider>
}

export default CartCtxProvider