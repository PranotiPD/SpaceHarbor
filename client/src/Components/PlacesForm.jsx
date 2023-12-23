import { useEffect, useState } from "react";
import PhotosUploader from "./PhotosUploader";
import Perks from "./Perks";
import AccountNav from "./AccountNav";
import axios from "axios";
import { Navigate, useParams } from "react-router";

function PlacesForm(){
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    
    const [perks, setPerks] = useState([]);
    const [description, setDescription] = useState('');
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if(!id){
            return;
        } else {
            axios.get('/places/'+id).then(response => {
                const {data} = response;
                console.log('1', data);
                setTitle(data.title);
                setAddress(data.address);
                setPerks(data.perks);
                setCheckIn(data.checkIn);
                setCheckOut(data.checkOut);
                setDescription(data.description);
                setExtraInfo(data.extraInfo);
                setMaxGuests(data.maxGuests);
                setAddedPhotos(data.photos);
            })
        }
    },[id])

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

    function savePlace(e) {
        e.preventDefault();
        const placeData = {title, address, description, addedPhotos,
            perks, extraInfo, checkIn, checkOut, maxGuests}
        if(id){
            //update
            axios.put('/places', {
                id, ...placeData
            }) 
        } else {
            //add
            axios.post('/places', placeData)    
        }
        setRedirect(true)
    }

    if(redirect) {
        return <Navigate to={'/account/places'} />
    }

    return(
        <div>
                    <div>
                        <AccountNav />
                        <form onSubmit={savePlace}>
                            {preInput('Title','Title for your place. recommended to have to short and catchy')}
                            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="title, for example: My lovely aparment"/>
                            {preInput('Address', 'Address to this place')}
                            <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="address"/>
                            {preInput('Photos', 'More is better')}
                            <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
                            {preInput('Description', 'Add description of place')}
                            <textarea value={description} onChange={e => setDescription(e.target.value)} className="border w-full rounded-xl" />
                            {preInput('Perks', 'Select checkboxes of all the perks you are offering')}
                            <Perks selected={perks} onChange={setPerks}/>
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
    )
}

export default PlacesForm;