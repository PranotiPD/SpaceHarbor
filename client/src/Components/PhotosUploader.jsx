import { useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

function PhotosUploader({addedPhotos, onChange}){
    const [photoLink, setPhotoLink] = useState('');

    async function addPhotoByLink(e) {
        e.preventDefault();
        if(photoLink){
            const {data: filename} = await axios.post('upload-by-link', {link: photoLink})
            onChange(prev => {
            return [...prev, filename];
        })
        setPhotoLink('');
        }    
    }

    function uploadPhoto(e) {
        const files = e.target.files;
        const data = new FormData();
        for(let i=0; i<files.length; i++){
            data.append('photos', files[i]);
        }
        axios.post('/upload', data, {
            headers: {'Content-Type':'multipart/form-data'}
        }).then(response => {
            const {data : filenames} = response;
            onChange(prev => {
                return [...prev, ...filenames];
            })
        })
    }

    return(
        <>
        <div className="flex gap-2">
                            <input value={photoLink} onChange={e => setPhotoLink(e.target.value)} type="text" placeholder="Add link of image"/>
                            <button onClick={addPhotoByLink} className="bg-gray-200 px-4 rounded-2xl grow">Add image</button>
                            </div>
                            <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                {addedPhotos.length > 0 && addedPhotos.map((link) => (
                                    
                                        <img key={link.toString()} className="rounded-2xl" src={'http://127.0.0.1:4000/uploads/'+link} alt="" />
                                    
                                    
                            ))}</div>
                            
                            <p className="ml-4">Or</p>
                            <div className="mt-2 grid grid-cols-3 md:grid:cols:4 lg:grid-cols-6">
                            <label className="flex gap-1 justify-center border bg-transparent rounded-xl p-8 text-sm text-200"><input type="file" className="hidden" multiple onChange={uploadPhoto}></input><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg>
Upload</label>
                            </div>
        </>
    )
}

PhotosUploader.propTypes = {
    addedPhotos: PropTypes.array,
    onChange: PropTypes.func
}
export default PhotosUploader;