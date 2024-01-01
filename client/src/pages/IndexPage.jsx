import { useEffect, useState, useContext } from "react";
import axios from "axios";
import {  Navigate } from "react-router-dom";
import { UserContext } from '../UserContext.jsx';

function IndexPage() {
    const [places, setPlaces] = useState([]);
    const [redirect, setRedirect] = useState();
    const [wishlist,setWishlist] = useState([]);
    const [itemDeleted, setItemDeleted] = useState(false);
    const {user} = useContext(UserContext);

    useEffect(() => {
        axios.get('/places').then((response) => {
            setPlaces(response.data)
        })
        if(user){
            axios.get('/wishlist').then((response) => {
                setWishlist(response.data);
            })
        }
    },[user])

    function addToWishList(e, id) {
        e.stopPropagation(); // it wont't get affected when outer div is clicked
        axios.post('/wishlist', {place: id}).then((response) => {
            console.log(response);
        })
        setItemDeleted(!itemDeleted);
    }

    async function removeFromWishlist(e,id) {
        e.stopPropagation();
        let wishId = '';
        for(let i = 0; i<wishlist.length; i++){
            if(wishlist[i].place._id === id){
                wishId = wishlist[i]._id
                break;
            }
        }
        await axios.post('/remove-from-wishlist',{wishId}).then((response) => {
            response
        }).catch((err) => {
            throw err
        })
        setItemDeleted(!itemDeleted);
    }

    function openPlace(id){
        setRedirect('/place/'+id);
    }

    function wishListed(id) {
        for(let i = 0; i<wishlist.length; i++){
            if(wishlist[i].place?._id === id){
                return wishlist[i]._id
            }
        }
        return null;
    }

    if(redirect) {
        return <Navigate to={redirect} />
    }

    return( 
    <div className="mt-8 gap-y-8 gap-x-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
        {places.length > 0 && places.map((place) => (
            <div  key={place.title} onClick={() => openPlace(place?._id)} className="cursor-pointer">
                <div className="relative">
                    {place.photos?.[0] && (
                        <img className="rounded-2xl aspect-square object-cover" src={'http://localhost:4000/uploads/'+place.photos?.[0]}/>
                    )}
                    {user && (wishListed(place._id) ? <div onClick={(e) => removeFromWishlist(e,place._id)} className="absolute top-3 right-3 p-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 fill-primary">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg></div> : <div onClick={(e) => addToWishList(e,place?._id)} className="absolute top-3 right-3 p-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 fill-black opacity-60 border-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg></div>)}
                    
                </div>
                <h2 className="font-bold ">{place?.address}</h2>
                <h2 className="text-sm truncate text-gray-500">{place?.title}</h2>
                <div className="mt-2"><span className="font-bold">${place?.price}</span> per night</div>
            </div>
        ))}
    </div>
    )
}

export default IndexPage;