import { useEffect, useState } from "react";
import AccountNav from "../Components/AccountNav";
import axios from "axios";
import { Navigate } from "react-router";

function WishlistPage() {
    const [wishlist, setWishlist] = useState([]);
    const [redirect, setRedirect] = useState();

    useEffect(() => {
        axios.get('/wishlist').then((response) => {
            setWishlist(response.data)
            console.log(response.data, 'wishlist')
        }).catch((err) => {
            throw err;
        })   
    },[])

    if(redirect){
        return <Navigate to={redirect} />
    }

    return (
        <div>
            <AccountNav />
            <div className="flex gap-6">
            {wishlist?.length > 0  && wishlist.map(item => (
                <div key={item._id} className="bg-gray-400 w-60 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setRedirect('/place/'+item.place._id)}>
                    <div className="w-60" >
                        {item.place?.photos?.length > 0 && (
                                <img className=" h-full " src={'https://spaceharbor-backend.vercel.app/uploads/'+item.place.photos?.[0]} alt=""></img>
                        )}
                    </div>
                    <h2 className="font-semibold text-center">{item.place?.title}</h2>
                </div>
            ))}
            </div>
        </div>
    )
}

export default WishlistPage;