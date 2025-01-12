
import Container from "../Components/Container";
import RestaurantDetail from "../Components/RestaurantDetail";
import ProductList from "../Components/ProductList";


const Restaurant = () => {
    

    return (
        <div>
          <div className="shadow">
           <Container >
             <RestaurantDetail/>
           </Container>
           </div>

           <Container>
             <ProductList/>
           </Container>
        </div>
    );
};

export default Restaurant;
