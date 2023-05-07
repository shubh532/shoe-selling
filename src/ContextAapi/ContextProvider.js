import React, { useState,useEffect } from "react";
import Context from "./ContexAPI";
import CartCtxProvider from "./CartCtxProvider";

function ContextProvider(props) {
  const [ProductList, UpdateList] = useState([]);

  useEffect(() => {
    async function fetchCartData (){
      const Response = await fetch(`https://crudcrud.com/api/1489f18060e7468f9f989998e318dff2/Products`)
      const CartData = await Response.json()
      UpdateList([...CartData])
    }
    fetchCartData()
  }, [])

  const AddProducts = async(item) => {
   const Response= await fetch("https://crudcrud.com/api/1489f18060e7468f9f989998e318dff2/Products",{
    method:"POST",
    body:JSON.stringify(item),
    headers:{
      "Content-Type": "application/json"
    }
   })
   const data=await Response.json()
   console.log(data)
   if (Response.ok){
    alert("Poduct Added")
    UpdateList([...ProductList, data]);
   }
  };

  const ContextItems = {
    Products: ProductList,
    AddProducts: AddProducts,
    message: "hello",
  };

  return (
    <Context.Provider value={ContextItems}>
      <CartCtxProvider>{props.children}</CartCtxProvider>
    </Context.Provider>
  );
}

export default ContextProvider;
