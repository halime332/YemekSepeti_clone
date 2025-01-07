import { Link } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";



const RestaurantCard =({data})=>{
    return(
        <Link to={`/restaurant/${data.id}`} className="rounded-lg over-flow-hidde hover:bg-gray-200 hover:shadow-lg
        cursor-pointer transition relative">

            <div className="bg-red-500 p-1 text-sm absolute end-1 top-2 rounded-md">{data.distance} km uzakta</div>

            <img className="w-full object-cover max-h-[300px]" src={data.photo} />

            <div className="p-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl md:text-xl font-semibold">{data.name}</h3>

                   <p className="flex items-center gap-2 text-red-500">
                     <MdOutlineStarPurple500 />
                      {data.rating}
                  </p>
                </div>
            </div>

            <div className="flex gap-4 justify-between items-center">
              <p className="text-sm my-3 text-gray-500">
                   <span>{data.minPrice} Tl minimum</span>

                  <div className="flex gap-2 items-center font-semibold">
                     <MdWatchLater className="text-red-500 text-lg"/> 
                     <span className="text-gray-500">{data.estimatedDelivery} dk.</span>
                  </div>
              </p>

            

                {data.isDeliveryFree && (
                <p className="flex gap-2 items-center ">
                   <MdDeliveryDining />
                 <span className="font-bold text-sm text-gray-500">  Ücretsiz</span>
                </p>
                )}
           </div> 
        </Link>
    );
};

export default RestaurantCard;