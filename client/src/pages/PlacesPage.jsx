import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

function PlacesPage() {
    const {action} = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState('');
    // const [perks, setPerks] = useState([]);
    const [description, setDescription] = useState('');
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);

    function inputHeader(text) {
        return(
            <h2 className="text-2xl mt-4">{text}</h2>
        )
    }

    function inputDescription(text) {
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        )
    }

    function preInput(header, description) {
        return(
            <div>
                {inputHeader(header)}
                {inputDescription(description)}
            </div>
        )
    }

    async function addPhotoByLink(e) {
        e.preventDefault();
        if(photoLink){
            const {data: filename} = await axios.post('upload-by-link', {link: photoLink})
        setAddedPhotos(prev => {
            return [...prev, filename];
        })
        setPhotoLink('');
        }
        
    }
    return (
        <div>
            {action != 'new' && (
                <div className="text-center">
                <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full " to="account/places/new">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>Add new places
                </Link>
            </div>
            )}
            {action === 'new' && (
                <div>
                    <div>
                        <form>
                            {preInput('Title','Title for your place. recommended to have to short and catchy')}
                            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="title, for example: My lovely aparment"/>
                            {preInput('Address', 'Address to this place')}
                            <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="address"/>
                            {preInput('Photos', 'More is better')}
                            <div className="flex gap-2">
                            <input value={photoLink} onChange={e => setPhotoLink(e.target.value)} type="text" placeholder="Add link of image"/>
                            <button onClick={addPhotoByLink} className="bg-gray-200 px-4 rounded-2xl grow">Add image</button>
                            </div>
                            <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                {addedPhotos.length > 0 && addedPhotos.map((link) => (
                                    <div key={new Date()} >
                                        <img className="rounded-2xl" src={'http://127.0.0.1:4000/uploads/'+link} alt="" />
                                    </div>
                                    
                            ))}</div>
                            
                            <p className="ml-4">Or</p>
                            <div className="mt-2 grid grid-cols-3 md:grid:cols:4 lg:grid-cols-6">
                            <button className="flex gap-1 justify-center border bg-transparent rounded-xl p-8 text-sm text-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg>
Upload</button>
                            </div>
                            {preInput('Description', 'Add description of place')}
                            <textarea value={description} onChange={e => setDescription(e.target.value)} className="border w-full rounded-xl" />
                            {preInput('Perks', 'Select checkboxes of all the perks you are offering')}
                            <div className="grid grid-cols-3 gap-2 cursor-pointer">
                                <label className="border px-2 py-2 mt-1 flex gap-1 items-center">
                                    <input type="checkbox" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
</svg>
                                    <span> Wifi</span>
                                </label>
                                <label className="border px-2 py-2 mt-1 flex gap-1 items-center">
                                    <input type="checkbox" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

                                    <span> Free Parking</span>
                                </label>
                                <label className="border px-2 py-2 mt-1 flex gap-1 items-center">
                                    <input type="checkbox" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
</svg>

                                    <span> TV</span>
                                </label>
                                <label className="border px-2 py-2 mt-1 flex gap-1 items-center">
                                    <input type="checkbox" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

                                    <span> Pets</span>
                                </label>
                                <label className="border px-2 py-2 mt-1 flex gap-1 items-center">
                                    <input type="checkbox" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                                    <span> Private entrance</span>
                                </label>
                                <label className="border px-2 py-2 mt-1 flex gap-1 items-center">
                                    <input type="checkbox" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
</svg>

                                    <span> Geyser</span>
                                </label>
                            </div>
                            {preInput('Extra info', 'House rules etc')}
                            <textarea value={extraInfo} onChange={e => setExtraInfo(e.target.value)} className="border w-full rounded-xl" />
                            {preInput('Check in&out times, max guests', 'Add check in and out times')}
                            <div className="grid grid-cols-3 items-center gap-2">   
                                <div>
                                    <h3 className="mt-2 mb-1">Check in time</h3>
                                    <input type="text" value={checkIn} onChange={e => setCheckIn(e.target.value)} placeholder="14" />
                                </div>
                                <div>
                                    <h3 className="mt-2 mb-1">Check out time</h3>
                                    <input type="text" placeholder="11" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
                                </div>
                                <div>
                                    <h3 className="mt-2 mb-1">Max guests</h3>
                                    <input min={1} type="number" placeholder="enter number" value={maxGuests} onChange={e => setMaxGuests(e.target.value)}/>
                                </div>
                            </div>
                            <button className="primary my-4">Save</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PlacesPage;
