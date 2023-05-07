import React,{useState} from 'react';
import AddShoesForm from './UI Componenrts/AddShoesForm';
import ContextProvider from './ContextAapi/ContextProvider';
import ShowProducts from './UI Componenrts/ShowProduct';
import CartItem2 from './Modal Components/CartItems2';


function App() {

  const [showcart, unshowcart] = useState(false);
  const showCartBtnHandle = (event) => {
    event.preventDefault()
    unshowcart(true);
  };

  const UnCartBtnHandle = (event) => {
    event.preventDefault()
    unshowcart(false);
  };

  return (
    <ContextProvider>
      {showcart&&<CartItem2 UnCartBtnHandle={UnCartBtnHandle}/>}
      <AddShoesForm showCartBtnHandl={showCartBtnHandle}/>
      <ShowProducts/>
    </ContextProvider>
  );
}

export default App;
