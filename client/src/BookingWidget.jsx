import PropTypes from 'prop-types';

function BookingWidget({place}) {
    return(
        <div className="bg-white md:p-4 p-2 rounded-2xl shadow">
                        <div className="text-2xl py-2 text-center">
                            Price: ${place.price} per night
                        </div>
                        <div className="border rounded-2xl mt-4">
                        <div className="flex">
                            <div className="px-4 py-3">
                                <label>Check in:</label>
                                <input type="date" />
                            </div>
                            <div className="border-l px-4 py-3">
                                <label>Check out:</label>
                                <input type="date" />
                            </div>
                        </div>
                        <div className="border-t px-4 py-3">
                            <label>Number of guests:</label>
                            <input type="number" value={1}/>
                        </div>
                        </div>
                        <button className="primary">Book this place </button>
                    </div>
    )
}

BookingWidget.propTypes = {
    place: PropTypes.string
}

export default BookingWidget;