import mongoose, {Schema} from "mongoose";
import Car from "../Car.js";
import FavouriteList from "../FavouriteList.js";

const carFavouriteListSchema = Schema ({
        car_id: {
            type: mongoose.Schema.Types.ObjectId, ref : Car
        },
        favouriteList_id: {
            type: mongoose.Schema.Types.ObjectId, ref : FavouriteList
        }
})

export default mongoose.model('CarFavouriteList', carFavouriteListSchema)