import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function PlacePage() {
    const {id} = useParams();
    const [place, setPlace] = useState(null);
    const [showAllPhotos, setShowAllPhotos] = useState(false);

    useEffect(() => {
        if(!id){
            return;
        }
        axios.get(`/places/${id}`).then((response) => {
            setPlace(response.data);
        })
        
    },[id])

    if(!place) return '';

    if(showAllPhotos){
        return (
        <div className="absolute bg-gray-200 min-h-screen inset-0 overflow-x-hidden">
            <h2 className="relative text-3xl top-12 left-14">Photos of {place.title}</h2>
            <button className="fixed bg-black text-white rounded-full p-2 top-2 left-14" onClick={() => setShowAllPhotos(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
</svg>

            </button>
            <div className="grid grid-cols-3 grid-row-((place?.photos?.length)/2) px-14 py-14 gap-4 ">
                {place?.photos?.length > 0 && place.photos.map((pic) => (
                    <img key={pic} src={'http://localhost:4000/uploads/'+pic} alt="" className="rounded-2xl aspect-square object-cover" />
                ))}
            </div>
        </div>
    )}

    return (
        <div className="mt-4 bg-gray-100 -mx-8 px-8 py-2">
            <h1 className="text-3xl font-bold">{place.title}</h1>
            <a className="my-1 text-lg font-semibold underline flex gap-1 items-center" target="_blank" rel="noreferrer"
            href={"https://maps.google.com/?q="+place.address}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>

                {place.address}
            </a>
            <div className="relative">
            <div className="flex gap-1">
                <div>
                    {place.photos?.[0] && (
                        <div >
                            <img className="object-cover" src={"http://localhost:4000/uploads/"+place.photos?.[0]}/>
                        </div>
                    )}
                </div>
                <div>
                    {place.photos?.[1] && (
                        <img className=" object-cover" src={"http://localhost:4000/uploads/"+place.photos?.[1]}/>
                    )}
                </div>
            </div>
            <button className="flex gap-1 rounded-xl absolute bottom-2 right-2 bg-white py-2 px-4" onClick={() => setShowAllPhotos(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
</svg>
                Show more photos
            </button>
            </div> 
            <div className="my-4">
                <h2 className="text-2xl font-bold">Description</h2>
                {place.description}
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <b>Check-in:</b> {place.checkIn}<br />
                    <b>Check-out:</b> {place.checkOut}<br />
                    <b>Maximum number of guests:</b> {place.maxGuests}<br />
                </div>
                <div>
                    <div className="bg-white p-4 rounded-2xl shadow">
                        <div className="text-2xl py-2 text-center">
                            Price: ${place.price} per night
                        </div>
                        <button className="primary">Book this place </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlacePage;