import PropTypes from 'prop-types';

function Perks({selected, onChange}){

    function handleClick(e){
        const {checked, name} = e.target;
        if(checked){
            onChange([...selected,e.target.name ])
        } else  checked 
            onChange([...selected.filter(selectedName => selectedName !== name)])
        }

    return(
        <div className="grid grid-cols-3 gap-2 cursor-pointer">
                                <label className="border px-2 py-2 mt-1 flex gap-1 items-center">
                                    <input type="checkbox" checked={selected.includes('wifi')} name="wifi" onChange={handleClick}/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
</svg>
                                    <span> Wifi</span>
                                </label>
                                <label className="border px-2 py-2 mt-1 flex gap-1 items-center">
                                    <input type="checkbox" checked={selected.includes('parking')} name="parking" onChange={handleClick}/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

                                    <span> Free Parking</span>
                                </label>
                                <label className="border px-2 py-2 mt-1 flex gap-1 items-center">
                                    <input type="checkbox" checked={selected.includes('tv')} name="tv" onChange={handleClick}/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
</svg>

                                    <span> TV</span>
                                </label>
                                <label className="border px-2 py-2 mt-1 flex gap-1 items-center">
                                    <input type="checkbox" checked={selected.includes('pets')} name="pets" onChange={handleClick}/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

                                    <span> Pets</span>
                                </label>
                                <label className="border px-2 py-2 mt-1 flex gap-1 items-center">
                                    <input type="checkbox" checked={selected.includes('private')} name="private-entrance" onChange={handleClick}/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                                    <span> Private entrance</span>
                                </label>
                                <label className="border px-2 py-2 mt-1 flex gap-1 items-center">
                                    <input type="checkbox" checked={selected.includes('Geyser')} name="Geyser" onChange={handleClick}/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
</svg>

                                    <span> Geyser</span>
                                </label>
                            </div>
    )
}

Perks.propTypes = {
    selected: PropTypes.array,
    onChange: PropTypes.func
}
export default Perks;