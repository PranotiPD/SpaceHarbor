import { Link } from "react-router-dom";
import AccountNav from "../Components/AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";

function PlacesPage() {
    const [places, setPlaces] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        axios.get('/user-places').then(({data}) => {
            setPlaces(data);
        })
    },[redirect])

    async function deletePlace(e, id) {
        e.preventDefault();
        await axios.post('/delete-place', {id});
        setRedirect(!redirect);
        await axios.post('/remove-place-from-wishlist',{id});
    }

    return (
        <div>
            <AccountNav />
            <div className="text-center">
                <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full " to={'/account/places/new'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>Add new places
                </Link>
            </div>
            <div className="mt-4">
            {places.length > 0 &&  places.map(place => (
                <div key={place.title} className="bg-gray-400 p-4 rounded-2xl  mt-4 mb-6 relative">
                    <Link to={'/account/places/'+place._id}  className="flex gap-4 cursor-pointer ">
                    <div className="flex w-32 h-32 bg-gray-300 shrink-0 rounded-2xl">
                        {place.photos.length > 0 && (
                            <img className="aspect-sqaure object-fill rounded-2xl" src={'https://spaceharbor-backend.vercel.app/uploads/'+place.photos?.[0]} alt=""></img>
                        )}
                    </div>
                    <div className="relative">
                    <h2 className="text-xl">{place.title}</h2>
                    <p className="text-sm mt-2">{place.description}</p>
                    </div>
                    
                </Link>
                <button className="absolute top-2 right-2 bg-primary text-white rounded-full p-2" onClick={(e) => deletePlace(e, place._id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
</svg>
                </button>
                </div>
                
            ))}
            </div>
        </div>
    )
}

export default PlacesPage;
