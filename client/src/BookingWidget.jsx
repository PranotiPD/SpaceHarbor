import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import {differenceInCalendarDays} from 'date-fns';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

function BookingWidget({place}) {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [redirect, setRedirect] = useState('')
    const {user} = useContext(UserContext);

    let numberOfNights = 0;
    if(checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn))
    }

    useEffect(() => {
        if(user) {
            setName(user.name);
        }
    },[user]);

    async function bookPlace(){
        const data = 
        {checkIn, checkOut, numberOfGuests, name,
        phone, place:place._id,
        price: numberOfNights * place.price
        }
       const response =  await axios.post('/bookings', data)
       const bookingId = response.data._id;
       setRedirect(`/account/bookings/${bookingId}`);
    }

    if(redirect) {
        return <Navigate to={redirect} />
    }
    return(
        <div className="bg-white md:p-4 p-2 rounded-2xl shadow">
                        <div className="text-2xl py-2 text-center">
                            Price: ${place.price} per night
                        </div>
                        <div className="border rounded-2xl mt-4">
                        <div className="flex">
                            <div className="px-4 py-3">
                                <label>Check in:</label>
                                <input type="date" className='border-none' value={checkIn} onChange={e => setCheckIn(e.target.value)}/>
                            </div>
                            <div className="border-l px-4 py-3">
                                <label>Check out:</label>
                                <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)}/>
                            </div>
                        </div>
                        {numberOfNights > 0 && (
                            <div>
                                <div className="border-t px-4 py-3">
                                    <label>Your full name:</label>
                                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                                </div>
                                <div className="border-t px-4 py-3">
                                    <label>Phone number:</label>
                                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}/>
                                </div>
                            </div>
                        )}
                        <div className="border-t px-4 py-3">
                            <label>Number of guests:</label>
                            <input type="number" value={numberOfGuests} onChange={e => setNumberOfGuests(e.target.value)}/>
                        </div>
                        </div>
                        <button className="primary mt-3" onClick={bookPlace}>
                            Book this place  
                            {numberOfNights > 0 && (
                                <span><span> for</span> <span className="font-bold"> ${numberOfNights * place.price}</span></span>
                            )}
                        </button>
                    </div>
    )
}

BookingWidget.propTypes = {
    place: PropTypes.object
}

export default BookingWidget;