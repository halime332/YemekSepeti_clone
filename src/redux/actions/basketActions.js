//* Sepetteki elemanları alan thunk aksiyonu

import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actiontypes";



// export const getCart = () => {
//     return async () => { };
// };

//Sepetteki elemanları alan thunk aksiyonu
export const getCart = () => (dispatch) => {
    dispatch({
        type: ActionTypes.CART_LOADING,
    });

    api
        .get("/cart")
        .then((res) =>
            dispatch({
                type: ActionTypes.CART_SUCCESS,
                payload: res.data,

            })
        )

        .catch((err) =>
            dispatch({
                type: ActionTypes.CART_ERROR,
                payload: err.message
            })
        );
};

//Sepette yeni eleman ekleyen thunk aksiyonu
export const addToBasket = (product) => (dispatch) => {
    ///sepete eklenecek olan ürünü bilgilerini belirle
    const newItem = {
        id: v4(),
        productId: product.id,
        title: product.title,
        price: product.price,
        photo: product.photo,
        amount: 1,

    };
    //2) api'a sepete elemanı eklemek için istek at
    api.post("/cart", newItem)
        //3)istek başarılı olursa reducer'a haber ver
        .then(() =>
            dispatch({
                type: ActionTypes.ADD_TO_BASKET,
                payload: newItem,
            })
        );

};

export const updateItem = (id, newAmount) => (dispatch) => {
    api.patch(`/cart/${id}`, { amount: newAmount })
        //istek başarılı olursa reducer'a güncellemeyi haber veriyoruz
        .then((res) => {
            dispatch({
                type: ActionTypes.UPDATE_ITEM,
                payload: res.data,
            });
        });
};
export const deleteItem = (id) => (dispatch) => {
    // api'a silmek için istek at
    api.delete(`/cart/${id}`)
        // başarılı olursa reducer'a elemanın  silinme haberini gönder
        .then(() =>
            dispatch({
                type: ActionTypes.DELETE_ITEM,
                payload: id,
            })
        );
};