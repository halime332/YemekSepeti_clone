import api from "../../utils/api";
import ActionTypes from "../actiontypes";


export const setLoading = (payload) => ({ type: ActionTypes.REST_LOADING, });

export const setRestaurants = (payload) => ({ type: ActionTypes.REST_SUCCESS, payload, });

export const setError = (payload) => ({ type: ActionTypes.REST_ERROR, payload, });



//* thunk fonksiyonu
//* içerisinde farklı bir fonksiyon return eder
//*Thunk bu fonksiyon içerisindeki fonksiyonu aksiyon
//*tetiklendiği anda algılar ve çalıştırır bu fonksiyon içerisinde 
//api istekleri atılabilir
export const getRestaurants = () => {
    return async (dispatch) => {
        dispatch(setLoading());

        api
            .get("/restaurants")
            .then((res) => dispatch(setRestaurants(res.data)))
            .catch((err) => dispatch(setError(err)));

    };
};