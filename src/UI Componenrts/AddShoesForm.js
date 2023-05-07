import { useState } from "react";
import Context from "../ContextAapi/ContexAPI";
import CartContext from "../ContextAapi/CartContex";
import { useContext } from "react";
import Style from "./AddShoes.module.css"
function AddShoesForm(props) {

    const ContextApi = useContext(Context)
    const CartContex=useContext(CartContext)

    let TotalQauntity = 0;
    CartContex.Items.forEach((item) => {
      TotalQauntity = item.Qty + TotalQauntity;
    })

    const [Name, UpdateName] = useState("")
    const [Discription, setDiscription] = useState("")
    const [Price, setPrice] = useState("")
    const [L, setL] = useState("")
    const [M, stM] = useState("")
    const [S, setS] = useState("")

    const getName = (event) => {
        UpdateName(event.target.value)
    }
    const getDiscrption = (event) => {
        setDiscription(event.target.value)
    }
    const getPrice = (event) => {
        setPrice(event.target.value)
    }
    const getLarge = (event) => {
        setL(event.target.value)
    }
    const getMedium = (event) => {
        stM(event.target.value)
    }
    const getSmall = (event) => {
        setS(event.target.value)
    }

    const AddProductBtn = (event) => {
        event.preventDefault()
        const ProductData = {
            id: Math.random(),
            Name: Name,
            Discription: Discription,
            Price: Price,
            L:L,
            M:M,
            S:S
        }
        // console.log(ProductData)
        ContextApi.AddProducts(ProductData)
    }



    return (
        <div className={Style.FormContainer}>
            <form >
                <div className={Style.inputContainer}>
                    <label>Medicine Name</label>
                    <input value={Name} onChange={getName} type="text"></input>
                </div>
                <div className={Style.inputContainer}>
                    <label>Discription</label>
                    <input value={Discription} onChange={getDiscrption} type="text"></input>
                </div>
                <div className={Style.inputContainer}>
                    <label>Price</label>
                    <input value={Price} onChange={getPrice} type="number"></input>
                </div>
                <div className={Style.SizeInpContainer}>
                    <label>Size</label>
                    <div className={Style.SizeInps}>
                        <label>L</label>
                        <input value={L} onChange={getLarge} type="number" min="0"></input>
                        <label>M</label>
                        <input value={M} onChange={getMedium} type="number" min="0"></input>
                        <label>S</label>
                        <input value={S} onChange={getSmall} type="number" min="0"></input>
                    </div>
                </div>
                <div className={Style.BtnContainer}>
                    <button onClick={AddProductBtn}>Add Medicine</button>
                    <button className={Style.CartBtn} onClick={props.showCartBtnHandl}>Cart {TotalQauntity}</button>
                </div>

            </form>
        </div>

    )
}

export default AddShoesForm;