import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import BookingWidget from "../BookingWidget";
import PhotoGallery from "../Components/PhotoGallery";
import Address from "../Components/Address";

function PlacePage() {
    const {id} = useParams();
    const [place, setPlace] = useState(null);

    useEffect(() => {
        if(!id){
            return;
        }
        axios.get(`/places/${id}`).then((response) => {
            setPlace(response.data);
        })
        
    },[id])

    if(!place) return '';

    return (
        <div className="mt-4 bg-gray-100 -mx-8 px-8 py-2 text-black overflow-x-hidden">
            <h1 className="text-3xl font-bold">{place.title}</h1>
            <Address place={place}/>
            <PhotoGallery place={place}/>
            <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div>
                <div className="my-4">
                    <h2 className="text-2xl font-bold">Description</h2>
                    {place.description}
                </div>
                    <b>Check-in:</b> {place.checkIn}<br />
                    <b>Check-out:</b> {place.checkOut}<br />
                    <b>Maximum number of guests:</b> {place.maxGuests}<br />
                    
                </div>
                <div>
                    <BookingWidget place={place}/>
                </div>
            </div>
            <div className="bg-white px-3 py-1 my-2 rounded-2xl">
                <div>
                    <h2 className="mt-3 text-2xl font-bold">Extra Info</h2>
                </div>
                <div className="my-2 text-sm text-gray-700 leading-4">{place.extraInfo}</div>
            </div>
        </div>
    )
}

export default PlacePage;