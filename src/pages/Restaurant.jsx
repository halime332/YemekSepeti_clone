import { useEffect,useState } from "react";
import api from "../utils/api";
import { useParams } from "react-router-dom";
import { Container } from "postcss";
import RestaurantDetail from "../Components/RestaurantDetail";
import ProductList from "../Components/ProductList";


const Restaurant = () => {
    const {id} = useParams();
    const[restaurant, setRestaurant]=useState(null);
    const [products, setProducts]=useState(null);

    useEffect(()=>{
       api.get(`/restaurants/${id}`).then((res=>setRestaurant(res.data)));
       api.get(`/products?restaurantId=${id}`).then((res)=>setProducts(res.data));
      
    },[id]);

    return (
        <div>
           <Container>
             <RestaurantDetail/>
           </Container>

           <Container>
             <ProductList/>
           </Container>
        </div>
    );
};

export default Restaurant;
