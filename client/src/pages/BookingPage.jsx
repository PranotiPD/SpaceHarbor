import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import Address from "../Components/Address";
import PhotoGallery from "../Components/PhotoGallery";
import BookingDates from "../Components/BookingDates";

function BookingPage() {
    const {id} = useParams();
    const [booking, setBooking] = useState();

    useEffect(() => {
        if(id){
            axios.get('/bookings').then(response => {
                const findBooking = response.data.find(({_id}) => _id === id)
                if(findBooking){
                    setBooking(findBooking);
                }
            })
        }
    }, [id])

    if(!booking){
        return '';
    }

    return(
        <div className="mt-4 -mx-8 px-8 py-2">
            <h1 className="text-3xl font-bold">{booking.place.title}</h1>
            <Address place={booking.place}/>
            <div className="bg-gray-100 my-4 p-4 flex rounded-2xl justify-between">
                <div>
                    <h2 className="text-2xl">Your booking information:</h2>
                    <BookingDates booking={booking} className='flex items-center gap-4'/>
                </div>
                <div className="bg-primary text-white p-4 rounded-2xl">
                    <div className="text-xl">Total price</div>
                    <div className="text-3xl">${booking.price}</div>
                </div>
            </div>
            <PhotoGallery place={booking.place}/>
        </div>
    )
}

export default BookingPage;