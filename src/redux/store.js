import { combineReducers, createStore, applyMiddleware } from "redux";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import restaurantReducer from "./reducers/restaurantReducer";
import { thunk } from "redux-thunk";



const rootReducer = combineReducers({
    product: productReducer,
    restaurant: restaurantReducer,
    cart: cartReducer,
});
//applyMiddleware herhangi bir arayazılımı redux'a
//dahil etmeye yarar
//biz burda thunk'ı dahil etmek için kullanıcaz
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
