import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./Components/Header";
import { useDispatch } from "react-redux";
import api from "./utils/api";
import { useEffect } from "react";
import { getRestaurants, } from "./redux/actions/restActions";
import Restaurant from "./pages/Restaurant";
import { getCart } from "./redux/actions/basketActions";


const App = () => {
  const dispatch = useDispatch();


  //thunk ile
  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getCart());
  }, []);


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
