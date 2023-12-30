import { useEffect, useState } from "react";
import AccountNav from "../Components/AccountNav";
import axios from "axios";
import { Navigate } from "react-router-dom";
import BookingDates from "../Components/BookingDates";

function BookingsPage() {
    const [bookings, setBookings] = useState([]);
    const [redirect, setRedirect] = useState('');

    useEffect(() => {
        axios.get('/bookings').then(response => {
            setBookings(response.data);
        })
    }, []);

    function openBookingPage(id) {
        setRedirect(`/account/bookings/${id}`)
    }

    if(redirect) {
        return <Navigate to={redirect} />
    }

    return(
        <div>
            <AccountNav />
            <div>{bookings?.length > 0 && bookings.map(booking => (
                <div onClick={() => openBookingPage(booking._id)} key={booking} className="flex gap-4 bg-gray-200 cursor-pointer rounded-2xl overflow-hidden">
                    <div className="w-48">
                        {booking.place?.photos?.length > 0 && (
                                <img className=" h-full" src={'http://localhost:4000/uploads/'+booking.place.photos?.[0]} alt=""></img>
                        )}
                    </div>
                    <div className="py-3 pr-3 grow">
                        <h2 className="text-xl">{booking.place.title}</h2>
                        <BookingDates booking={booking}/>
                        <div className="flex gap-2 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>

                            Total price: ${booking.price}
                        </div>
                    </div>
                </div>
            ))}</div>
        </div>
    )
}

export default BookingsPage;