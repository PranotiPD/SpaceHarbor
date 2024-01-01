import './App.css'
import { Route, Routes } from 'react-router';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import Register from './pages/Register';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import ProfilePage from './pages/ProfilePage';
import PlacesPage from './pages/PlacesPage';
import PlacesForm from './Components/PlacesForm';
import PlacePage from './pages/PlacePage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import BookingsPage from './pages/BookingsPage.jsx';
import WishlistPage from './pages/WishlistPage.jsx';

axios.defaults.baseURL='http://127.0.0.1:4000'
axios.defaults.withCredentials = true;
function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/account' element={<ProfilePage />} />
          <Route path='/account/profile' element={<ProfilePage />} />
          <Route path='/account/places' element={<PlacesPage />} />
          <Route path='/account/places/new' element={<PlacesForm />} />
          <Route path='/account/places/:id' element={<PlacesForm />} />
          <Route path='/place/:id' element={<PlacePage />}/>
          <Route path='/account/bookings' element={<BookingsPage />} />
          <Route path='/account/bookings/:id' element={<BookingPage />} />
          <Route path='/account/wishlist' element={<WishlistPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App;
