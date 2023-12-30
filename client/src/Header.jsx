import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import PropTypes from 'prop-types';

function Header({mode, setMode, bgcolor, setBgColor, textColor, setTextColor}){
    const {user} = useContext(UserContext);

    function changeMode() {
      if(mode === 'light'){
        setMode('dark');
        setBgColor('black')
        setTextColor('white')
      } else {
        setMode('light');
        setBgColor('white');
        setTextColor('black');
      }
      console.log(bgcolor)
    }

    useEffect(() => {
      if(mode === 'light'){
        setBgColor('black')
        setTextColor('white')
      } else {
        setBgColor('white')
        setTextColor('black')
      }
    },[mode ,setBgColor, setTextColor])

    return(
      bgcolor && <header className='flex justify-between border-b-2 pt-1 pb-2 px-8 -mx-8'>
      <Link to='/' className='flex items-center gap-1 text-lg'>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className='w-8 h-8'>
        <path fill="#ff5252" d="M42.459,32.519c-1.037-3.336-9.539-19.596-12.12-24.5l-0.026-0.048C29.153,5.559,26.676,4,24,4 s-5.153,1.559-6.291,3.929L17.661,8.02C15.08,12.923,6.578,29.183,5.542,32.518C5.261,33.421,5,34.407,5,35.5 c0,4.687,3.813,8.5,8.5,8.5c4.654,0,7.612-1.949,10.5-5.184C26.888,42.051,29.846,44,34.5,44c4.687,0,8.5-3.813,8.5-8.5 C43,34.407,42.739,33.421,42.459,32.519z M23.999,34.662C22.33,32.515,20,28.881,20,26c0-2.206,1.794-4,4-4s4,1.794,4,4 C28,28.872,25.668,32.511,23.999,34.662z M34.5,41c-3.287,0-5.521-1.107-8.325-4.258C27.878,34.596,31,30.104,31,26 c0-3.86-3.141-7-7-7s-7,3.14-7,7c0,4.104,3.122,8.596,4.825,10.742C19.021,39.893,16.787,41,13.5,41C10.468,41,8,38.533,8,35.5 c0-0.653,0.162-1.308,0.406-2.09C9.17,30.95,15.3,18.948,20.316,9.417l0.076-0.146C21.055,7.891,22.471,7,24,7 s2.945,0.891,3.615,2.285l0.068,0.132C32.7,18.948,38.83,30.95,39.595,33.411C39.838,34.192,40,34.847,40,35.5 C40,38.533,37.532,41,34.5,41z"></path>
      </svg>
      <span className='font-bold text-red-500 text-3xl'>airbnb</span>
      </Link>
      <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-gray-300'>
        <div className={`font-bold text-${textColor}-600`}>Anywhere</div>
        <div className='border-l border-gray-400'></div>
        <div className={`font-bold text-${textColor}-500`}>Any week</div>
        <div className='border-l border-gray-400'></div>
        <div className='text-gray-500'>Add guests</div>
        <button className='bg-primary text-white p-2 rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className='w-3 h-3 text-white'>
          <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
        </svg>
        </button>
      </div>
    <div className="flex gap-4 items-center">
    <div onClick={changeMode} className={`cursor-pointer bg-${bgcolor} rounded-full p-2`}>
      {mode === 'light' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
</svg>

}{mode === 'dark' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
</svg>
}
    </div>
    <Link to={user ? '/account' : '/login'} className='flex gap-3 border border-gray-300 rounded-full py-2 px-4 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className='w-4 h-4'>
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
        </svg>
        <div className='bg-gray-500 text-white rounded-full overflow-hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 relative top-1">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
        </div>
        {user && (
          <div>{user.name}</div>
        )}
      </Link>
    </div>
    </header>
    )
}

Header.propTypes = {
  mode: PropTypes.string,
  setMode: PropTypes.func,
  bgcolor: PropTypes.string,
  setBgColor: PropTypes.func,
  textColor: PropTypes.string,
  setTextColor: PropTypes.func
}

export default Header;